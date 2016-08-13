

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import org.json.JSONException;
import org.json.JSONObject;

@Path("/calcservice")
public class calcService
{
  @Path("{operation}/{left_oprnt}/{right_oprnt}")
  @GET
  @Produces({"application/json"})
  public Response convertFtoCfromInput(@PathParam("operation") String optr, @PathParam("left_oprnt") float left_oprnt, @PathParam("right_oprnt") float right_oprnt)
    throws JSONException
  {
    JSONObject jsonObject = new JSONObject();
    float result = 0.0F;
    if (optr.equalsIgnoreCase("+")) {
      result = left_oprnt + right_oprnt;
    }
    if (optr.equalsIgnoreCase("-")) {
      result = left_oprnt - right_oprnt;
    }
    if (optr.equalsIgnoreCase("x")) {
      result = left_oprnt * right_oprnt;
    }
    if (optr.equalsIgnoreCase("div")) {
      result = left_oprnt / right_oprnt;
    }
    jsonObject.put("result", result);
    
    return Response.status(200).entity(jsonObject.toString()).header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").build();
  }
}