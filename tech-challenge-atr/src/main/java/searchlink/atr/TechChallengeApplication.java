package searchlink.atr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@ComponentScan
@EnableJms
@Configuration
@EnableScheduling
public class TechChallengeApplication {

    public static void main(String[] args) {
        SpringApplication.run(TechChallengeApplication.class, args);
    }


}
