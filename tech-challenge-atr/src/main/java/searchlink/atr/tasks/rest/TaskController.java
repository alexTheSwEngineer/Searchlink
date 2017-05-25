package searchlink.atr.tasks.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import searchlink.atr.tasks.domain.entities.Priority;
import searchlink.atr.tasks.domain.events.ProcessTaskEvent;
import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.tasks.service.commands.CreateTaskCommand;
import searchlink.atr.tasks.service.commands.PostponeTaskCommand;
import searchlink.atr.tasks.service.commands.ProcessTaskCommand;
import searchlink.atr.tasks.service.commands.UpdateTaskCommand;
import searchlink.atr.tasks.service.interfaces.TaskService;
import searchlink.atr.util.date.DateTimeUtil;
import searchlink.atr.util.notification.interfaces.EventPublisher;

import javax.validation.Valid;
import java.time.OffsetDateTime;
import java.util.List;

/**
 *
 */
@RestController
@CrossOrigin(origins = "*")
//this is dangerous and should be avoided or limited to specific ip address regex. Demo use only!!!
public class TaskController {
    private TaskService taskService;
    private DateTimeUtil dateTimeUtil;
    private EventPublisher<ProcessTaskCommand> processTaskEvent;

    public TaskController(TaskService taskService, DateTimeUtil dateTimeUtil, ProcessTaskEvent processTaskEvent) {
        this.taskService = taskService;
        this.dateTimeUtil = dateTimeUtil;
        this.processTaskEvent = processTaskEvent;
    }

    @RequestMapping(value = "/tasks", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public TaskDTO createTask(@RequestBody @Valid CreateTaskCommand createOrUpdateTaskCommand) {
        return taskService.create(createOrUpdateTaskCommand);
    }

    @RequestMapping(value = "/tasks", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    public TaskDTO updateTask(@RequestBody @Valid UpdateTaskCommand updateTaskCommand) {
        return taskService.update(updateTaskCommand);
    }

    @RequestMapping(value = "/tasks/process", method = RequestMethod.PUT)
    public void process(@Valid @RequestBody ProcessTaskCommand processTaskCommand) {
        //push task to processing queue.
        this.processTaskEvent.publish(processTaskCommand);
    }

    @RequestMapping(value = "/tasks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TaskDTO> getAllForNow() {
        OffsetDateTime now = dateTimeUtil.getOffsetDateTimeNow();
        return taskService.getUnresolvedAndUnposponedTasks(now);
    }

    @RequestMapping(value = "/tasks/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public TaskDTO getOne(@PathVariable("id") long id) {
        return taskService.findOne(id);
    }


    @RequestMapping(value = "/tasks/postpone", method = RequestMethod.PUT)
    public void postpone(@RequestBody PostponeTaskCommand postponeTaskCommand) {
        taskService.postponeTask(postponeTaskCommand);
    }


    //EASIER TESTING FOR DEMO
    @RequestMapping(value = "/tasks/debug/createRandom", method = RequestMethod.GET)
    public TaskDTO createTask() {
        CreateTaskCommand createOrUpdateTaskCommand = new CreateTaskCommand();
        createOrUpdateTaskCommand.setPriority(Priority.High);
        createOrUpdateTaskCommand.setDueDate(dateTimeUtil.getZonedDateTimeNow().plusDays(2));
        createOrUpdateTaskCommand.setDescription("Forced random task" + Math.random());
        createOrUpdateTaskCommand.setTitle("Foreced random title" + Math.random());
        return taskService.create(createOrUpdateTaskCommand);
    }

    @RequestMapping(value = "/tasks/debug/all", method = RequestMethod.GET)
    public List<TaskDTO> getAll() {
        return this.taskService.findAll();
    }


}
