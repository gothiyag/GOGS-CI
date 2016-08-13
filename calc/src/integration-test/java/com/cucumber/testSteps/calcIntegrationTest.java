package com.cucumber.testSteps;


import java.io.*;
import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;


public class calcIntegrationTest {

	
		
WebDriver dr;

@Given("^navigate to calchome page$")
public void navigate(){
	System.setProperty("webdriver.chrome.driver", "C:\\Gogs-Project\\chromedriver\\chromedriver.exe");
      dr=new ChromeDriver();
      dr.manage().deleteAllCookies();
       dr.get("http://localhost:8080/calc");     
       String actualText=dr.findElement(By.xpath("//div[@id='navText']/h2")).getText();
       Assert.assertEquals("Simple Calc", actualText);
       
       }
@When("^user logs in using numberA as \"([^\"]*)\" and numberB as \"([^\"]*)\" and Operator as \"([^\"]*)\"$")
public void login(String Number1,String Number2,String Operator){
	   System.out.println("Am in ");
       dr.findElement(By.xpath("//*[@id='Number1']")).sendKeys(Number1);
       dr.findElement(By.xpath("//*[@id='Number2']")).sendKeys(Number2);
       dr.findElement(By.xpath("//*[@id='"+Operator+"']")).click();
       dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
       }
@Then("^Result as \"([^\"]*)\" should be displayed$")
public void verifySuccessful(String result){
	System.out.println("The result is: "+result);
      String actualText=dr.findElement(By.xpath("//*[@id='Result']")).getAttribute("value");
      System.out.println("The actualText is: "+actualText);
      Assert.assertEquals(result,actualText);
      dr.close();
      }
}