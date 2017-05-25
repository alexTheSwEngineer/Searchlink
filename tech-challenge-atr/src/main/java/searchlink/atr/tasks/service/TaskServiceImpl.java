package searchlink.atr.tasks.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import searchlink.atr.tasks.domain.entities.Status;
import searchlink.atr.tasks.domain.entities.Task;
import searchlink.atr.tasks.domain.events.PostponedTaskEvent;
import searchlink.atr.tasks.domain.events.ProcessTaskEvent;
import searchlink.atr.tasks.domain.events.ProcessedTaskEvent;
import searchlink.atr.tasks.domain.events.TaskCreatedEvent;
import searchlink.atr.tasks.service.commands.common.InvalidCommandStateException;
import searchlink.atr.tasks.service.commands.common.BaseMutateTaskCommand;
import searchlink.atr.util.date.DateTimeUtil;
import searchlink.atr.util.date.DateTimeUtilImpl;
import searchlink.atr.util.notification.interfaces.EventPublisher;
import searchlink.atr.tasks.domain.repositories.TaskRepository;
import searchlink.atr.tasks.service.commands.*;
import searchlink.atr.tasks.service.interfaces.TaskService;
import searchlink.atr.tasks.rest.dto.TaskDTO;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 *
 */
@Service
public class TaskServiceImpl implements TaskService {

    private EventPublisher<TaskDTO> taskCreatedEvent;
    private EventPublisher<Long> taskPostponedEvent;
    private EventPublisher<Long> taskProcessedEvent;

    private DateTimeUtil dateTimeUtil;
    private TaskRepository taskRepository;

    @Autowired
    public TaskServiceImpl(DateTimeUtil dateTimeUtil,ProcessedTaskEvent processedTaskEvent,PostponedTaskEvent postponedTaskEvent, ProcessTaskEvent processTaskEvent, TaskCreatedEvent taskCreatedEvent, TaskRepository taskRepository) {
        this.taskCreatedEvent = taskCreatedEvent;
        this.taskPostponedEvent = postponedTaskEvent;
        this.taskProcessedEvent = processedTaskEvent;

        this.dateTimeUtil=dateTimeUtil;
        this.taskRepository = taskRepository;

        //Events subscription
        processTaskEvent.subscribe(this::process);
    }

    @Override
    @Transactional
    public void postponeTask(PostponeTaskCommand postponeCommand) {
        executeTaskMutation(postponeCommand, existing->{
            existing.setPostponedTo(dateTimeUtil.toOffset(postponeCommand.getPostponeTo()));
            Task postponed = taskRepository.save(existing);
            this.taskPostponedEvent.publish(postponed.getId());
            return postponed;
        });
    }

    @Override
    @Transactional
    public TaskDTO create(CreateTaskCommand createCommand) {
        Task task = fromCreateDTO(createCommand);
        return createCommand.getValidationErrors(task)
             .map(this.taskRepository::save)
             .map(t->new TaskDTO(t,dateTimeUtil))
             .map(taskCreatedEvent::publish)
             .orElseThrow(errors->new InvalidCommandStateException(createCommand.getName(),errors));
    }

    @Override
    @Transactional
    public TaskDTO update(UpdateTaskCommand updateCommand) {
        return  this.executeTaskMutation(updateCommand, existing->{
            existing.setDescription(updateCommand.getDescription());
            existing.setTitle(updateCommand.getTitle());
            existing.setPriority(updateCommand.getPriority());
            existing.setDueDate(dateTimeUtil.toOffset(updateCommand.getDueDate()));
            Task updated = taskRepository.save(existing);
            return new TaskDTO(updated,this.dateTimeUtil);
        });
    }

    @Override
    public List<TaskDTO> getUnresolvedAndUnposponedTasks(OffsetDateTime date) {
        return taskRepository.findAllPending_withPostponedDateBefore(date)
                .stream()
                .map(task->new TaskDTO(task,this.dateTimeUtil))
                .collect(Collectors.toList());
    }

    @Override
    public List<TaskDTO> getPostponedForAfter(OffsetDateTime date) {
        return taskRepository.findAllPending_withPostponedDateBefore(date)
                .stream()
                .map(task->new TaskDTO(task,this.dateTimeUtil))
                .collect(Collectors.toList());
    }

    @Transactional
    @Override
    public void process(ProcessTaskCommand processTaskCommand) {
        this.executeTaskMutation(processTaskCommand, existing->{
            existing.setStatus(Status.Resolved);
            existing.setResolvedAt(this.dateTimeUtil.getOffsetDateTimeNow());
            Task updated = taskRepository.save(existing);
            this.taskProcessedEvent.publish(updated.getId());
            return new TaskDTO(updated,dateTimeUtil);
        });
    }

    @Override
    public TaskDTO findOne(long id) {
        return Optional.ofNullable(taskRepository.findOne(id))
                        .map(task->new TaskDTO(task,this.dateTimeUtil))
                        .orElse(null);
    }

    @Override
    public List<TaskDTO> findAll(){
        return this.taskRepository.findAll().stream().map(task->new TaskDTO(task,this.dateTimeUtil)).collect(Collectors.toList());
    }

    private <TResult> TResult executeTaskMutation(BaseMutateTaskCommand command, Function<Task,TResult> action){
        Task existing = this.taskRepository.findOne(command.getId());
        return command.getValidationErrors(existing)
                .map(action)
                .orElseThrow(x->new InvalidCommandStateException(command.getName(),x));
    }


    private Task fromCreateDTO(CreateTaskCommand createCommand) {
        Task task = new Task();
        task.setUuid(UUID.randomUUID());
        task.setDescription(createCommand.getDescription());
        task.setDueDate(dateTimeUtil.toOffset(createCommand.getDueDate()));
        task.setTitle(createCommand.getTitle());
        task.setDescription(createCommand.getDescription());
        task.setPriority(createCommand.getPriority());
        task.setStatus(Status.Pending);
        return task;
    }
}
