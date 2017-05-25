package searchlink.atr.tasks.domain.events;

import org.springframework.stereotype.Component;
import searchlink.atr.tasks.service.commands.ProcessTaskCommand;
import searchlink.atr.util.notification.SimpleEventImpl;

import static searchlink.atr.tasks.domain.events.Events.PROCESS_TASK_EVENT;

/**
 * Fired when a tasks needs to be processed.
 * This event is the task processing Queue.
 */
@Component
public class ProcessTaskEvent extends SimpleEventImpl<ProcessTaskCommand> {
    public ProcessTaskEvent() {
        super(String.valueOf(PROCESS_TASK_EVENT));
    }
}