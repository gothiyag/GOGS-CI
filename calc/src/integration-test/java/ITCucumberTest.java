/**
 * @author gthiyaga
 */

import org.junit.runner.RunWith;

import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)

@Cucumber.Options(glue = {"com.cucumber.feature","com.cucumber.testSteps"},format={"pretty","html:reports/test-report"},tags= "@calcIntegrationTest")

public class ITCucumberTest {

}
