package searchlink.atr.util.scheduler;

import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

/**
 *
 */
@Component
public class DefaultScheduler implements Scheduler {
    private ConcurrentTaskScheduler scheduler;

    public DefaultScheduler() {
        ScheduledExecutorService localExecutor = Executors.newSingleThreadScheduledExecutor();
        scheduler = new ConcurrentTaskScheduler(localExecutor);

    }

    @Override
    public void scheduleSingleTask(ZonedDateTime date, Runnable action) {
        scheduler.schedule(action, Date.from(date.toInstant()));
    }


}
