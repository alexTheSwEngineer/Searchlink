package searchlink.atr.tasks.domain.events;

/**
 * Unique event identifiers so no collisions in JMS Queues and topics happen.
 */
public enum Events {
    POSTPONED_TASK_IS_DUE_EVENT,
    TASK_CREATED_EVENT,
    POSTPONED_TASK_EVENT,
    PROCESS_TASK_EVENT,
    PROCESSED_TASK_EVENT
}
