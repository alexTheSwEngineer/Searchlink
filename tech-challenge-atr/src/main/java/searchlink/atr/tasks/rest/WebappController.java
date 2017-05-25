package searchlink.atr.tasks.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class WebappController {

    //Needed in order to redirect refreshes of angular's "virtual" routes
    @RequestMapping("webapp/**")
    void redirectToWebappStartPage(HttpServletResponse response, HttpServletRequest request) throws IOException {
        response.sendRedirect("/index.html");
    }
}
