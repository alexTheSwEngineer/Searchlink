package searchlink.atr.util.scheduler;

import java.time.LocalDate;
import java.time.ZonedDateTime;

/**
 * Interface used for scheduling tasks and jobs.
 *
 * This makes our code independant of the scheduling provider be it native java.concurency or some 3rd party api like Quartz.
 */
public interface Scheduler {
    void scheduleSingleTask(ZonedDateTime date, Runnable action);

}
