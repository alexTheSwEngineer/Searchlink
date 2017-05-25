package searchlink.atr.tasks.service.commands;


import lombok.Data;
import searchlink.atr.tasks.domain.entities.Task;
import searchlink.atr.tasks.service.commands.common.BaseMutateTaskCommand;
import searchlink.atr.util.validation.Validation;

import javax.validation.constraints.NotNull;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

/**
 *
 */
@Data
public class PostponeTaskCommand extends BaseMutateTaskCommand {
    @NotNull
    ZonedDateTime postponeTo;

    public PostponeTaskCommand() {
        super("POSTPONE_TASK");
    }

    @Override
    public Validation<Task, String> getValidationErrors(Task task) {
        return super.getValidationErrors(task)
                .validate(this::postponeDateIsInvalid, "Postpone date is invalid " + postponeTo);
    }

    private boolean postponeDateIsInvalid(Task task) {
        OffsetDateTime commandPostonedTime = OffsetDateTime.ofInstant(postponeTo.toInstant(), ZoneId.systemDefault());
        return task.getDueDate().isAfter(commandPostonedTime);
    }

}
