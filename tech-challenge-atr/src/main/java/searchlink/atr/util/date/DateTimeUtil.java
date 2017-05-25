package searchlink.atr.util.date;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;

/**
 * Date util, used for zone/offset/utc conversions. Has various NOW methods.
 * <p>
 * Having date util exrtacted as a dependancy allows us to have deterministic state and testable code.
 * Static references introduce global state to our code and make it harder to test, and reason about.
 * Hence the need for this interface even though the implementation is the standard static methods from Java.Util and Java.time
 * Same goes for the RandomUtil.
 */

public interface DateTimeUtil {
    OffsetDateTime toDb(LocalDate date);

    LocalDate fromDb(OffsetDateTime date);

    LocalDate getLocalDateNow();

    ZonedDateTime getZonedDateTimeNow();

    OffsetDateTime getOffsetDateTimeNow();

    ZonedDateTime toZoned(OffsetDateTime offsetDateTime);

    OffsetDateTime toOffset(ZonedDateTime zonedDateTime);
}
