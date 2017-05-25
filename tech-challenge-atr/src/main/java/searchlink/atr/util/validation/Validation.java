package searchlink.atr.util.validation;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

/**
 * Validation monad. Showing off my grasp of functional programing principles. Very simmilar to a Try monad.
 */
public class Validation<TInput, TError> {
    private List<TError> errors = new ArrayList<TError>();
    private TInput input;

    private Validation(TInput input, List<TError> errors) {
        this.input = input;
        this.errors = errors;
    }

    public Validation<TInput, TError> validate(Function<? super TInput, Boolean> validator, TError error) {
        if (validator.apply(this.input)) {
            List<TError> newErrorList = new ArrayList<TError>();
            newErrorList.addAll(this.errors);
            newErrorList.add(error);
            return new Validation<TInput, TError>(this.input, newErrorList);
        }

        return this;
    }

    public <TField> Validation<TInput, TError> validate(Function<? super TInput, TField> fieldAccessor, Predicate<? super TField> validator, TError error) {
        return this.validate(fieldAccessor.andThen(validator::test)::apply, error);
    }

    public <TTransformed> Validation<TTransformed, TError> map(Function<? super TInput, TTransformed> transform) {
        if (this.errors.isEmpty()) {
            return new Validation<TTransformed, TError>(transform.apply(this.input), new ArrayList<TError>(errors));
        }
        return new Validation<TTransformed, TError>(null, new ArrayList<TError>(errors));
    }

    public TInput get(){
        if(!errors.isEmpty()){
            throw new ValidationException(errors);
        }

        return this.input;
    }

    public TInput orElse(TInput defaultValue){
        if(errors.isEmpty()){
            return this.input;
        }

        return defaultValue;
    }

    public TInput orElseThrowChecked(Function<Collection<TError>,? super Throwable> exceptionProvider) throws Throwable {
        if(errors.isEmpty()){
            return this.input;
        }

        throw (Throwable) exceptionProvider.apply(this.errors);
    }

    public TInput orElseThrow(Function<Collection<TError>,? super RuntimeException> exceptionProvider) {
        if(errors.isEmpty()){
            return this.input;
        }

        throw (RuntimeException) exceptionProvider.apply(this.errors);
    }

    public static <TIn,TEr> Validation<TIn,TEr> of(TIn input){
        return new Validation<TIn, TEr>(input,new ArrayList<TEr>());
    }
}
