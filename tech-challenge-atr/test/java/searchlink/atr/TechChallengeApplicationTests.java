package searchlink.atr;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TechChallengeApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Test
	public void ConcurentSetRemovesNulls(){
		Set<Long> set = ConcurrentHashMap.newKeySet();
		set.add(6l);
		Long l = null;
		set.remove(l);
		Assert.assertEquals("set is empty",0,set.size());
	}
}
