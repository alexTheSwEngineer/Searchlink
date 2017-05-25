package searchlink.atr.tasks.domain.events;

import org.springframework.stereotype.Component;
import searchlink.atr.util.notification.SimpleEventImpl;

import static searchlink.atr.tasks.domain.events.Events.PROCESSED_TASK_EVENT;

/**
 * Fired when task has ben successfully processed.
 */
@Component
public class ProcessedTaskEvent extends SimpleEventImpl<Long> {
    public ProcessedTaskEvent() {
        super(String.valueOf(PROCESSED_TASK_EVENT));
    }
}
