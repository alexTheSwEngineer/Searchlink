package searchlink.atr.tasks.rest.dto;

import lombok.Data;
import searchlink.atr.tasks.domain.entities.Priority;
import searchlink.atr.tasks.domain.entities.Status;
import searchlink.atr.tasks.domain.entities.Task;
import searchlink.atr.util.date.DateTimeUtil;

import java.time.ZonedDateTime;
import java.util.UUID;

/**
 * Used to transfer Task data to client. In theory, hides potential sensitive data.
 */
@Data
public class TaskDTO {
    Long id;
    UUID uuid;
    long version;
    ZonedDateTime createdAt;
    ZonedDateTime updatedAt;
    ZonedDateTime dueDate;
    ZonedDateTime postponedTo;
    ZonedDateTime resolvedAt;
    String title;
    String description;
    Priority priority;
    Status status;

    public TaskDTO() {
    }


    public TaskDTO(Task task, DateTimeUtil dateTimeUtil) {
        id = task.getId();
        uuid = task.getUuid();
        createdAt = dateTimeUtil.toZoned(task.getCreatedAt());
        updatedAt = dateTimeUtil.toZoned(task.getUpdatedAt());
        dueDate = dateTimeUtil.toZoned(task.getDueDate());
        postponedTo = dateTimeUtil.toZoned(task.getPostponedTo());
        resolvedAt = dateTimeUtil.toZoned(task.getResolvedAt());
        title = task.getTitle();
        description = task.getDescription();
        priority = task.getPriority();
        status = task.getStatus();
        version = task.getVersion();
    }
}
