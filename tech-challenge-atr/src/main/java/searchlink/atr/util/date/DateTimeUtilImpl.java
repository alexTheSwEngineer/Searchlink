package searchlink.atr.util.date;

import org.springframework.expression.spel.ast.OpInc;
import org.springframework.stereotype.Component;

import java.time.*;
import java.util.Optional;

/**
 * Used to access system time.
 */

@Component
public class DateTimeUtilImpl implements DateTimeUtil{

    @Override
    public OffsetDateTime toDb(LocalDate date) {
        return Optional.ofNullable(date)
                .map(x->OffsetDateTime.of(date, LocalTime.NOON, (ZoneOffset) ZoneOffset.systemDefault()))
                .orElse(null);
    }


    /**
     * To be used in a mapper/converter if we deside to change DB
     * @param date
     * @return
     */
    @Override
    public LocalDate fromDb(OffsetDateTime date) {
        return Optional.ofNullable(date)
                        .map(LocalDate::from)
                        .orElse(null);
    }

    @Override
    public LocalDate getLocalDateNow() {
        return LocalDate.now();
    }

    @Override
    public ZonedDateTime getZonedDateTimeNow() {
        return ZonedDateTime.now();
    }

    @Override
    public OffsetDateTime getOffsetDateTimeNow() {
        return OffsetDateTime.now();
    }

    @Override
    public  ZonedDateTime toZoned(OffsetDateTime offsetDateTime){
        return Optional.ofNullable(offsetDateTime).map(x->ZonedDateTime.from(x)).orElse(null);
    }

    @Override
    public  OffsetDateTime toOffset(ZonedDateTime zonedDateTime){
        return Optional.ofNullable(zonedDateTime).map(x->OffsetDateTime.from(x)).orElse(null);
    }
}
