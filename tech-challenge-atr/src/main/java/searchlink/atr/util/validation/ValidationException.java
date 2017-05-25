package searchlink.atr.util.validation;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
public class ValidationException extends RuntimeException{
    List<Object> validationErrors;
    public ValidationException(List<?> errors){
        this.validationErrors.addAll(new ArrayList<>(errors));
    }
}
