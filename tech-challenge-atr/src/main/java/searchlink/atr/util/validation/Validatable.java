package searchlink.atr.util.validation;

import java.util.List;

/**
 * Used to check if the state of the object implementing this interface is valid. Can be used to validate object
 * even if validation is dependant on some service.
 *
 * Usually sticking to "out of the box" sollutions  patterns and framevorks is a good way to go.
 * However, the standard CustomValidator and @Valid support in SpringMVC the means of  (easilly) checking something that is
 * dependant on some service.
 * There is a great support for static checks like @NotNull and those are used through out this project.
 */
public interface Validatable<TInput,TError> {
    Validation<TInput,TError> getValidationErrors(TInput input);
}
