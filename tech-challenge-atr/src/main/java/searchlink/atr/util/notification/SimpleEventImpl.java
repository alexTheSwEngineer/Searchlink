package searchlink.atr.util.notification;

import searchlink.atr.util.notification.interfaces.Event;
import searchlink.atr.util.notification.interfaces.EventPublisher;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Consumer;
import java.util.stream.Collectors;

/**
 * Core implementation of the Event interface /Observer pattern.
 * <p>
 * It has pessimistic expectations of listeners methods not failing and is made deliberetly robust against exceptions.
 * It has however, optimistic expectations about listeners not halting, since it is executed on the main thread.
 */
public class SimpleEventImpl<TMsg> implements Event<TMsg>, EventPublisher<TMsg> {
    Set<Consumer<TMsg>> listeners = ConcurrentHashMap.newKeySet();
    String topic;

    public SimpleEventImpl() {
        this(UUID.randomUUID().toString());
    }

    public SimpleEventImpl(String topic) {
        this.topic = topic;
    }

    @Override
    public String getTopic() {
        return topic;
    }

    @Override
    public void subscribe(Consumer<TMsg> consumer) {
        listeners.add(consumer);
    }

    @Override
    public void unsubscribe(Consumer<TMsg> consumer) {
        listeners.remove(consumer);
    }

    @Override
    public TMsg publish(TMsg msg) {
        List<Consumer<TMsg>> imuttableListenerList = listeners.stream().collect(Collectors.toList());

        List<Exception> exceptions = new ArrayList<>();
        for (Consumer<TMsg> consumer :
                imuttableListenerList) {
            Exception exception = safeApply(consumer, msg);
            if (exception != null) {
                exceptions.add(exception);
            }
        }

        //This is best resolved by getting another publishingStrategy parameter
        //We don't need to set in stone that every listener will be called but an agregate exception will be thrown.
        //Maybe we need to notiffy only listeners up until the first exception
        if (!exceptions.isEmpty()) {
            throw new AggregateException("Exceptions occured while publishing event topic:" + topic, exceptions);
        }

        return msg;
    }


    private Exception safeApply(Consumer<TMsg> listener, TMsg msg) {
        try {
            listener.accept(msg);
            return null;
        } catch (Exception e) {
            return e;
        }
    }
}
