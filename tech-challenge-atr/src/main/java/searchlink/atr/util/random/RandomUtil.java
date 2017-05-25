package searchlink.atr.util.random;

/**
 * Random util
 * <p>
 * Having random util exrtacted as a dependancy allows us to have deterministic state and testable code.
 * Static references introduce global state to our code and make it harder to test, and reason about.
 * This allows us to have a seedable random util if we need to.
 * Same goes for the DateUtil.
 */
public interface RandomUtil {
    double random();

    long random(int maxRange);
}
