/*
*****Assignment Details:****
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, 
and `runTests` with `switch` for test type messages.

****Assignment Requirements:****
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript

****Hints to Solve:****
For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. 
For `runTests`, use a `switch` statement to handle different `testType` values, including a default case.

****Expected Outcome:****
Upon completion, you should be able to: - Understand and implement different conditional statements using Javascript
*/


function launchBrowser(BrowserName){
if(BrowserName === "Chrome")
{
    console.log("The Browser is : "+BrowserName+"")
}
else if (BrowserName === "Safari")
   {
    console.log("The Browser is : "+BrowserName+"")
} 

}

function runTests(TestType){
switch (TestType){
       
        case "Sanity":
            console.log("This is a Sanity test");
            break;
        case "Regression":
            console.log("This is a Regression test");
            break;
        default:
            console.log("This is a Smoke test");
            break;      
        
  }

}

launchBrowser();
runTests();

