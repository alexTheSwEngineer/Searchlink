package searchlink.atr.util.notification.interfaces;

import java.util.function.Consumer;

/**
 * Simple event subscribe/unsubscribe interface.
 * <p>
 * There are a lot of out of the box stuff about this: JMS topics and Queues, plain old java Observer abd Observable, JavaRx and the Flux spring boot 2.x APIs etc.
 * This interface allows us to easilly change our mind about it, since it is bound to what we logicaly need and not to the way we are going to implement it.
 * Having such really common interface writen from scratch is in most part was due to my unsertainty of how I would implement it.
 * In production I would rather use some of the java libraries.
 */
public interface Event<TMsg> {
    void subscribe(Consumer<TMsg> consumer);

    void unsubscribe(Consumer<TMsg> consumer);

    String getTopic();
}
