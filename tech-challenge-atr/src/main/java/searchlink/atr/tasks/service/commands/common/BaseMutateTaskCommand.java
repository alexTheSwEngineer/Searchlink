package searchlink.atr.tasks.service.commands.common;

import lombok.Data;
import searchlink.atr.tasks.domain.entities.Task;
import searchlink.atr.util.validation.Validation;

import javax.persistence.EntityNotFoundException;
import javax.validation.constraints.NotNull;

/**
 * Base class for all the commands that are to result in object mutation.
 * <p>
 * This is to ilustrate that I am familiar with the concepts of CQRS and event sourcing. By using this naming convention we can eventually:
 * a) Move all comands to the domain and loose the Task table completly, just storing a task mutation "history".
 * b) Have specialized and optimized flows for reading and writing, (although this may cause 'transactions' to be just 'eventually consistent')
 * c) Have better vertical slices and single responcibility principle utilization in our application and move it to microservices if needed
 */
@Data
public abstract class BaseMutateTaskCommand implements ICommand {
    @NotNull
    long id;
    @NotNull
    long version;
    String name;

    protected BaseMutateTaskCommand(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public Validation<Task, String> getValidationErrors(Task task) {
        return Validation.<Task, String>of(task)
                .validate(this::optimisticLockingFailed, "Trying to update task:" + task.getId() + "with a stale model");
    }

    private boolean optimisticLockingFailed(Task existingTask) {
        if (existingTask.getId() != id) {
            throw new EntityNotFoundException("trying to check command against wrong object toZoned DB ids:" + id + "," + existingTask.getId());
        }

        return this.version != existingTask.getVersion();
    }
}
