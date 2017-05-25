package searchlink.atr.util.notification;

import searchlink.atr.util.notification.interfaces.HTTPNotification;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Pull notification implementations of the HTTPNotification interface.
 * <p>
 * For legacy browsers this is the only way to go. Curently it keeps all the buffered
 * not yet pulled events in heap. Can be easilly implemented in a more scalable way.
 */
public class PullNotification<TMsg> implements HTTPNotification<String, TMsg> {
    private int bufferSize;
    private Map<String, List<TMsg>> listeners = new ConcurrentHashMap();

    public PullNotification(int bufferSize) {
        this.bufferSize = bufferSize;
    }

    public String getSubscription() {
        String id = UUID.randomUUID().toString();
        listeners.put(id, new LinkedList<TMsg>());
        return id;
    }

    public void push(TMsg msg) {
        for (Map.Entry<String, List<TMsg>> listener : listeners.entrySet()) {
            List<TMsg> buffer = listener.getValue();
            if (buffer.size() < bufferSize) {
                buffer.add(msg);
            }
        }
    }

    public List<TMsg> pull(String id) {
        List<TMsg> result = listeners.get(id);
        if (result == null) {
            throw new IllegalArgumentException("No listener with id " + id + "is subscirbed");
        }

        listeners.put(id, new LinkedList<TMsg>());
        return result;
    }
}
