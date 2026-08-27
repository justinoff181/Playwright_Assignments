
/*
---------Requirements:
 Red Bus (Edge):
o Load the home page and print the page title and current URL.
 Flipkart (Firefox):
o Load the home page and print the page title and current URL.
-----------Hints:
 Use page.title() to retrieve the page title.
 Use page.url() to retrieve the current page URL.

------------Use the following URLs:
o Red Bus: https://www.redbus.in
o Flipkart: https://www.flipkart.com

*/


import {chromium,test} from "@playwright/test"

//test ("Title", execution body)    
test("Launch a Browser",async()=>{

const browser1 = await chromium.launch({headless:false,channel:"msedge"}) 
const context1 = await browser1.newContext();  //created an isolated env with the help of browser reference
const page1 = await context1.newPage()  //created a new blank page for loaing the URL
await page1.goto("https://www.redbus.in") 
await page1.waitForTimeout(1000)  //wait for demo purpose - to display the sequence of events for launching the browser
const URL1 = page1.url();
const title1 = await page1.title();
console.log("The URL in MS Edge browser is : " +URL1)
console.log("Page title is: " +title1); //Prints the Page title defined in the Source code of the web page
//console.log(`Page title is: ${title1}`); //Alternate way to define the string output ising `  `

const browser2 = await chromium.launch({headless:false,channel:"chrome"}) 
const context2 = await browser2.newContext();  //created an isolated env with the help of browser reference
const page2 = await context2.newPage()  //created a new blank page for loaing the URL
await page2.goto("https://www.flipkart.com") 
await page2.waitForTimeout(1000)  //wait for demo purpose - to display the sequence of events for launching the browser
const URL2 = page2.url();
const title2 = await page2.title();
console.log("") //to diaplay emply line in output
console.log("The URL in chrome browser is : " +URL2)
console.log("Page title is: " +title2); //Prints the Page title defined in the Source code of the web page
//console.log(`Page title is: ${title1}`); //Alternate way to define the string output ising `  `
console.log("") //to diaplay emply line in output

}
)

