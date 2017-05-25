package searchlink.atr.util.notification.interfaces;


public interface EventPublisher<TMsg> {
    TMsg publish(TMsg msg);
}
