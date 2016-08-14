/*
 * @author: gthiyaga
 */


import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.junit.Assert;
import org.junit.Test;



import javax.ws.rs.core.Application;

public class AcalcService extends JerseyTest {

    @Override
    protected Application configure() {
        return new ResourceConfig(calcService.class);
    }

    @Test
    public void addition() {
    	 
        String response = target("calcservice/+/5/5").request().get(String.class);
        Assert.assertTrue("{\"result\":10}".equals(response));
    }

    @Test
    public void subtraction() {
        String response = target("calcservice/-/5/2").request().get(String.class);
        Assert.assertTrue("{\"result\":3}".equals(response));
    }
    
    @Test
    public void multiplication() {
        String response = target("calcservice/x/6/6").request().get(String.class);
        Assert.assertTrue("{\"result\":36}".equals(response));
    }
    
    
    @Test
    public void division() {
        String response = target("calcservice/%/9/3").request().get(String.class);
        Assert.assertTrue("{\"result\":0}".equals(response));
    }
}