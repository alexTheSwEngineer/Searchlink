package searchlink.atr.util.notification;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import searchlink.atr.util.notification.interfaces.HTTPNotification;

import javax.transaction.NotSupportedException;
import java.io.IOException;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

/**
 * ServerSentEvents implementation for http push notifications.
 */
public class SsePushNotification<TMsg> implements HTTPNotification<SseEmitter, TMsg> {
    private Supplier<SseEmitter> sseEmitterSupplier;
    private SimpleEventImpl<TMsg> simpleEvent;

    public SsePushNotification(Supplier<SseEmitter> sseEmitterSupplier) {
        this.sseEmitterSupplier = sseEmitterSupplier;
        this.simpleEvent = new SimpleEventImpl<TMsg>();
    }

    @Override
    public List<TMsg> pull(SseEmitter id) {
        throw new RuntimeException(new NotSupportedException("Trying to pull a push only sse event subscription"));
    }

    @Override
    public SseEmitter getSubscription() {
        EventToSseBinding eventBinding = new EventToSseBinding(sseEmitterSupplier.get(), simpleEvent);
        return eventBinding.emitter;
    }

    @Override
    public void push(TMsg msg) {
        simpleEvent.publish(msg);
    }

    private class EventToSseBinding implements Consumer<TMsg> {
        private SseEmitter emitter;
        private SimpleEventImpl<TMsg> eventToBindTo;

        public EventToSseBinding(SseEmitter emitter, SimpleEventImpl<TMsg> eventToBindTo) {
            this.emitter = emitter;
            this.eventToBindTo = eventToBindTo;
            this.emitter.onCompletion(this::unsubscribe);
            this.emitter.onTimeout(this::unsubscribe);
            eventToBindTo.subscribe(this);
        }


        @Override
        public void accept(TMsg msg) {
            try {
                emitter.send(msg);
            } catch (IOException e) {
                //Exceptions are never supposed to be
                //a) Silently ignored
                //b) Used as controll flow.
                //Disregard this deliberate dirty fix.
                unsubscribe();

                //throw new UncheckedIOException(e);
            }
        }

        private void unsubscribe() {
            eventToBindTo.unsubscribe(this);
        }

    }

}
