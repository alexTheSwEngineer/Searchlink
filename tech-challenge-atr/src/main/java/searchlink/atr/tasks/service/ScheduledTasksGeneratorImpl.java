package searchlink.atr.tasks.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import searchlink.atr.tasks.domain.entities.Priority;
import searchlink.atr.tasks.domain.events.PostponedTaskEvent;
import searchlink.atr.tasks.domain.events.PostponedTaskIsDueEvent;
import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.tasks.service.commands.CreateTaskCommand;
import searchlink.atr.tasks.service.interfaces.ScheduledTasksGenerator;
import searchlink.atr.tasks.service.interfaces.TaskService;
import searchlink.atr.util.date.DateTimeUtil;
import searchlink.atr.util.notification.interfaces.EventPublisher;
import searchlink.atr.util.random.RandomUtil;
import searchlink.atr.util.scheduler.Scheduler;

import java.time.ZonedDateTime;

/**
 *
 */

@Component
public class ScheduledTasksGeneratorImpl implements ScheduledTasksGenerator {
    @Value("${taskGeneration.probability}")
    private int taskGenerationProbability;
    private TaskService taskService;
    private RandomUtil randomUtil;
    private DateTimeUtil dateTimeUtil;
    private Scheduler scheduler;
    private EventPublisher<TaskDTO> postponedTaskIsDueEvent;

    @Autowired
    public ScheduledTasksGeneratorImpl(TaskService taskService, PostponedTaskEvent postponedTaskEvent, PostponedTaskIsDueEvent postponedTaskIsDueEvent, RandomUtil randomUtil, Scheduler scheduler, DateTimeUtil dateTimeUtil) {
        this.taskService = taskService;
        this.randomUtil = randomUtil;
        this.dateTimeUtil = dateTimeUtil;
        this.scheduler = scheduler;
        this.postponedTaskIsDueEvent = postponedTaskIsDueEvent;

        postponedTaskEvent.subscribe(this::scheduleTaskIsDueEventReminder);
    }

    private void scheduleTaskIsDueEventReminder(Long taskId) {
        TaskDTO postponedTask = taskService.findOne(taskId);
        scheduler.scheduleSingleTask(postponedTask.getPostponedTo(), () -> {
            try {
                TaskDTO postponeIsDueTask = taskService.findOne(taskId);
                postponedTaskIsDueEvent.publish(postponeIsDueTask);
            } catch (Exception e) {
                //log exception, don't need to break event chain. Even though this is an acceptable silent fail,
                //this is generally a bad practice. Moreover:
                // e.printStackTrace() is a really bad practice, we should at least abstract logging
                //so we don't deppent od the underlying default input stream. It is sufficient for a demo, but not production
                //This would never be allowed in production
                e.printStackTrace();
            }

        });
    }

    @Override
    @Scheduled(fixedRate = 30 * 1000)
    public void scheduledGenerate() {
        if (randomUtil.random(100) > taskGenerationProbability) {
            return;
        }
        ZonedDateTime now = dateTimeUtil.getZonedDateTimeNow();
        CreateTaskCommand createTaskCommand = new CreateTaskCommand();
        createTaskCommand.setDescription("Random desc" + randomUtil.random());
        createTaskCommand.setTitle("Random title " + randomUtil.random());
        createTaskCommand.setDueDate(now.plusDays(10));
        createTaskCommand.setPriority(Priority.Medium);
        taskService.create(createTaskCommand);
    }
}
