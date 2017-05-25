package searchlink.atr.tasks.service.commands.common;

import lombok.Data;
import searchlink.atr.util.validation.Validatable;
import searchlink.atr.tasks.domain.entities.Task;

import java.util.Collection;
import java.util.List;

/**
 *
 */
@Data
public class InvalidCommandStateException extends RuntimeException {
    private Collection<String> errors;
    private String taskCommand;
    public InvalidCommandStateException(String command, Collection<String> errors) {
        super(errors.stream().reduce((l,r)->l+"|"+r).orElse(""));
        this.errors=errors;
        this.taskCommand = command;
    }
}
