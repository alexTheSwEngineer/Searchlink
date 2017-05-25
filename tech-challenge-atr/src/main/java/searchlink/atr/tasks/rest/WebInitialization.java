package searchlink.atr.tasks.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import searchlink.atr.tasks.domain.events.PostponedTaskIsDueEvent;
import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.tasks.service.interfaces.TaskService;
import searchlink.atr.util.date.DateTimeUtil;
import searchlink.atr.util.scheduler.Scheduler;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;
import java.util.List;

/**
 * Responcible for running once per instance startup logic.
 *
 */
@Component
public class WebInitialization {

    private Scheduler scheduler;
    private TaskService taskService;
    private DateTimeUtil dateTimeUtil;
    private PostponedTaskIsDueEvent postponedTaskIsDueEvent;

    @Autowired
    public WebInitialization(Scheduler scheduler, TaskService taskService, DateTimeUtil dateTimeUtil, PostponedTaskIsDueEvent postponedTaskIsDueEvent) {
        this.scheduler = scheduler;
        this.taskService = taskService;
        this.dateTimeUtil = dateTimeUtil;
        this.postponedTaskIsDueEvent = postponedTaskIsDueEvent;
    }


    /**
     *  Gets called once per startup
     */
    @PostConstruct
    public void init() {
        //Schedule reminders for postponed tasks
        OffsetDateTime now = dateTimeUtil.getOffsetDateTimeNow();
        List<TaskDTO> tasksPostponedForLater = taskService.getPostponedForAfter(now);
        for (TaskDTO task : tasksPostponedForLater) {
            final TaskDTO taskToPublish = task;
            final ZonedDateTime timeToPublish = taskToPublish.getPostponedTo();
            scheduler.scheduleSingleTask(timeToPublish, () -> postponedTaskIsDueEvent.publish(taskToPublish));
        }
    }

}
