package searchlink.atr.util.random;

import org.springframework.stereotype.Component;

/**
 *
 */
@Component
public class RandomUtilImpl implements RandomUtil{

    @Override
    public double random() {
        return Math.random();
    }

    @Override
    public long random(int maxRange) {
        return (long)(Math.random()*maxRange);
    }
}
