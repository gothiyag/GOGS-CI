$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('integration.feature');
formatter.feature({
  "line": 3,
  "name": "calc Functionality Feature",
  "description": "\r\nIn order to ensure calc Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "calc-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.scenario({
  "line": 16,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"5\" and numberB as \"2\" and Operator as \"add\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"7\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 5602015723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 50
    },
    {
      "val": "add",
      "offset": 70
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 248188407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 18554004751,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"5\" and numberB as \"2\" and Operator as \"sub\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"3\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 3821445967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 50
    },
    {
      "val": "sub",
      "offset": 70
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 253287828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 179156837,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "calc Functionality",
  "description": "",
  "id": "calc-functionality-feature;calc-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@calcIntegrationTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "navigate to calchome page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user logs in using numberA as \"5\" and numberB as \"2\" and Operator as \"mul\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Result as \"10\" should be displayed",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "calcIntegrationTest.navigate()"
});
formatter.result({
  "duration": 4138897791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 50
    },
    {
      "val": "mul",
      "offset": 70
    }
  ],
  "location": "calcIntegrationTest.login(String,String,String)"
});
formatter.result({
  "duration": 245118577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    }
  ],
  "location": "calcIntegrationTest.verifySuccessful(String)"
});
formatter.result({
  "duration": 18512180219,
  "status": "passed"
});
});