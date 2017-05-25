package searchlink.atr.tasks.service.commands;

import lombok.Data;
import searchlink.atr.tasks.domain.entities.Priority;
import searchlink.atr.tasks.domain.entities.Task;
import searchlink.atr.tasks.service.commands.common.ICommand;
import searchlink.atr.util.validation.Validatable;
import searchlink.atr.util.validation.Validation;

import javax.validation.constraints.NotNull;
import java.time.ZonedDateTime;

/**
 * Create task command.
 */
@Data
public class CreateTaskCommand implements Validatable<Task, String>, ICommand {
    @NotNull
    ZonedDateTime dueDate;
    String title;
    String description;
    Priority priority = Priority.Low;

    @Override
    public Validation<Task, String>
    getValidationErrors(Task task) {
        return Validation.of(task);
    }

    @Override
    public String getName() {
        return "CREATE_TASK";
    }
}
