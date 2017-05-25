package searchlink.atr.tasks.domain.events;

import org.springframework.stereotype.Component;
import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.util.notification.SimpleEventImpl;

import static searchlink.atr.tasks.domain.events.Events.TASK_CREATED_EVENT;

/**
 * Fired when task is randomly generated
 */
@Component
public class TaskCreatedEvent extends SimpleEventImpl<TaskDTO> {
    public TaskCreatedEvent() {
        super(String.valueOf(TASK_CREATED_EVENT));
    }
}