package searchlink.atr.tasks.domain.events;

import org.springframework.stereotype.Component;
import searchlink.atr.util.notification.SimpleEventImpl;

import static searchlink.atr.tasks.domain.events.Events.POSTPONED_TASK_EVENT;

/**
 * Fired after a task is postponed to a later time.
 */
@Component
public class PostponedTaskEvent extends SimpleEventImpl<Long> {

    public PostponedTaskEvent() {
        super(String.valueOf(POSTPONED_TASK_EVENT));
    }
}
