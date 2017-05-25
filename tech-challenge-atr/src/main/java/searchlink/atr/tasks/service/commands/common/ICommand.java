package searchlink.atr.tasks.service.commands.common;

import com.fasterxml.jackson.annotation.JsonIgnore;
import searchlink.atr.tasks.domain.entities.Task;
import searchlink.atr.util.validation.Validatable;

/**
 *
 */
public interface ICommand extends Validatable<Task,String> {
    @JsonIgnore
    String getName();
}
