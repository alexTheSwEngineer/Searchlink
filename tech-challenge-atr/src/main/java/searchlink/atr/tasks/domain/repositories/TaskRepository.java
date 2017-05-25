package searchlink.atr.tasks.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import searchlink.atr.tasks.domain.entities.Task;

import java.time.OffsetDateTime;
import java.util.List;

/**
 *
 */

public interface TaskRepository extends JpaRepository<Task, Long> {

    //Always add a unique element in ordering. Maybe add some of the dates too?
    @Query(value = " select t from Task t where t.status = searchlink.atr.tasks.domain.entities.Status.Pending and (t.postponedTo is null or t.postponedTo <= ?1) ORDER BY  t.id")
    public List<Task> findAllPending_withPostponedDateBefore(OffsetDateTime date);

    @Query(value = " select t from Task t where t.status = searchlink.atr.tasks.domain.entities.Status.Pending and t.postponedTo >= ?1 ORDER BY  t.id")
    public List<Task> findAllPending_withPostponedDateAfter(OffsetDateTime date);
}
