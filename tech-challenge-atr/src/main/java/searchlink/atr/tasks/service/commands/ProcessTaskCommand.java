package searchlink.atr.tasks.service.commands;

import lombok.Data;
import lombok.EqualsAndHashCode;
import searchlink.atr.tasks.domain.entities.Status;
import searchlink.atr.tasks.service.commands.common.BaseMutateTaskCommand;

/**
 *
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class ProcessTaskCommand extends BaseMutateTaskCommand {
    private Status status;

    public ProcessTaskCommand() {
        super("PROCESS_TASK");
    }
}
