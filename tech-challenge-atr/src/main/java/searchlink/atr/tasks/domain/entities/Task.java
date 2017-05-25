package searchlink.atr.tasks.domain.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

/**
 *
 */
@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;

    UUID uuid;

    @Version
    Long version;

    OffsetDateTime createdAt;

    OffsetDateTime updatedAt;

    OffsetDateTime dueDate;

    OffsetDateTime postponedTo;

    OffsetDateTime resolvedAt;

    String Title;

    String description;

    @Enumerated(EnumType.STRING)
    Priority priority = Priority.Low;

    @Enumerated(EnumType.STRING)
    Status status;

    @PrePersist
    protected void onCreate() {
        createdAt = OffsetDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = OffsetDateTime.now();
    }

    public Task() {
    }

}
