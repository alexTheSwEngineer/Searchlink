package searchlink.atr.tasks.domain.events;

import org.springframework.stereotype.Component;
import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.util.notification.SimpleEventImpl;

import static searchlink.atr.tasks.domain.events.Events.POSTPONED_TASK_IS_DUE_EVENT;

/**
 * Fired when system time is pass a tasks postponed time. Ideally this should be pushed to both a JMS topic and a jms que
 */
@Component
public class PostponedTaskIsDueEvent extends SimpleEventImpl<TaskDTO> {
    public PostponedTaskIsDueEvent() {
        super(String.valueOf(POSTPONED_TASK_IS_DUE_EVENT));
    }
}

