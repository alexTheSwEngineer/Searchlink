package searchlink.atr.tasks.service.commands;

import lombok.Data;
import searchlink.atr.tasks.domain.entities.Priority;
import searchlink.atr.tasks.service.commands.common.BaseMutateTaskCommand;

import javax.validation.constraints.NotNull;
import java.time.ZonedDateTime;

/**
 *
 */
@Data
public class UpdateTaskCommand extends BaseMutateTaskCommand {
    @NotNull
    ZonedDateTime dueDate;
    String title;
    String description;
    Priority priority;

    public UpdateTaskCommand() {
        super("UPDATE_TASK");
    }

}
