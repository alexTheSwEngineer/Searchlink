package searchlink.atr.util.notification.interfaces;

import java.util.List;

/**
 * Abstraction for http notification.
 * <p>
 * Not all browsers support sockets, or SSE. This enables our code to be independant of that.
 */
public interface HTTPNotification<TSubscriptionMethod, TMsg> {
    List<TMsg> pull(TSubscriptionMethod id);

    TSubscriptionMethod getSubscription();

    void push(TMsg msg);
}
