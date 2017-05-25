package searchlink.atr.tasks.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import searchlink.atr.tasks.domain.events.PostponedTaskEvent;
import searchlink.atr.tasks.domain.events.PostponedTaskIsDueEvent;
import searchlink.atr.tasks.domain.events.ProcessedTaskEvent;
import searchlink.atr.tasks.domain.events.TaskCreatedEvent;
import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.util.notification.PullNotification;
import searchlink.atr.util.notification.SsePushNotification;
import searchlink.atr.util.notification.interfaces.Event;
import searchlink.atr.util.notification.interfaces.HTTPNotification;

import java.util.List;

/**
 * Endpoints for all the push/pull notifications conserning tasks
 * <p>
 * HTTPNotification is an interface that I created in order to abstract the specific method of notifying subscribed clients.
 */
@RestController
@CrossOrigin(origins = "*")
public class EventSubscriptionEndpoints {

    private HTTPNotification<SseEmitter, TaskDTO> addTaskToViewsSSE;
    private HTTPNotification<String, TaskDTO> addTaskToViewsPULL;
    private HTTPNotification<SseEmitter, Long> removeTaskFromViewsSSE;
    private HTTPNotification<String, Long> removeTaskFromViewPull;
    private long sseTimeout;

    public EventSubscriptionEndpoints(PostponedTaskIsDueEvent postponedTaskIsDueEvent, TaskCreatedEvent taskCreatedEvent, PostponedTaskEvent postponedTaskEvent, ProcessedTaskEvent processedTaskEvent, @Value("${sseEmmiter.timeoutInMiliseconds}") long sseTimeout, @Value("${pullnotification.buffersize}") int pullNotificationBufferSize) {
        this.sseTimeout = sseTimeout;

        //CREATE SPECIFIC PUSH OR PULL HTTP CAPABLE EVENT ENDPOINTS
        addTaskToViewsPULL = new PullNotification<TaskDTO>(pullNotificationBufferSize);
        addTaskToViewsSSE = new SsePushNotification<>(this::createSsEmiter);
        removeTaskFromViewsSSE = new SsePushNotification<>(this::createSsEmiter);
        removeTaskFromViewPull = new PullNotification<>(pullNotificationBufferSize);

        //BIND HTTP EVENTS WITH DOMAIN EVENTS
        bindAddTaskToViewTo(postponedTaskIsDueEvent, taskCreatedEvent);
        bindRemoveTaskFromViewTo(processedTaskEvent, postponedTaskEvent);
    }


    @RequestMapping(value = "/tasks/events/incoming/sse", method = RequestMethod.GET)
    public SseEmitter subscribeToTaskCreatedSSE() {
        return this.addTaskToViewsSSE.getSubscription();
    }

    @RequestMapping(value = "/tasks/events/removed/sse", method = RequestMethod.GET)
    public SseEmitter subscrubeToTaskDisapperingSSE() {
        return this.removeTaskFromViewsSSE.getSubscription();
    }

    @RequestMapping(value = "/tasks/events/incoming/pull", method = RequestMethod.GET)
    public String subscribeToTaskCreatedPullNotification() {
        return addTaskToViewsPULL.getSubscription();
    }

    @RequestMapping(value = "/tasks/events/removed/pull", method = RequestMethod.GET)
    public String subscrubeToTaskDisapperingPullNotification() {
        return this.removeTaskFromViewPull.getSubscription();
    }

    @RequestMapping(value = "/tasks/events/incoming/pull/{id}", method = RequestMethod.GET)
    public List<TaskDTO> pullIncoming(@PathVariable("id") String id) {
        return this.addTaskToViewsPULL.pull(id);
    }

    @RequestMapping(value = "/tasks/events/removed/pull/{id}", method = RequestMethod.GET)
    public List<Long> pullRemoved(@PathVariable("id") String id) {
        return this.removeTaskFromViewPull.pull(id);
    }

    private SseEmitter createSsEmiter() {
        return new SseEmitter(sseTimeout);
    }

    private void bindAddTaskToViewTo(Event<TaskDTO>... events) {
        for (Event<TaskDTO> event : events) {
            event.subscribe(this.addTaskToViewsPULL::push);
            event.subscribe(this.addTaskToViewsSSE::push);
        }
    }

    private void bindRemoveTaskFromViewTo(Event<Long>... events) {
        for (Event<Long> event : events) {
            event.subscribe(this.removeTaskFromViewPull::push);
            event.subscribe(this.removeTaskFromViewsSSE::push);
        }
    }
}
