/*
Assignment Details:
Declare a global variable and shadow it inside a function using
 both `var` and `let` to see how they behave differently when printed

Assignment Requirements:
1. Declare a const name as browserName (global)
2. Assign value as Chrome
3. Create a function by name getBrowserName
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserName) and print that variable inside function (outside block)
6. Call that function from the javascript
*/

const BrowserName = "Chrome";

function getBrowserName(BName){
if (BName === "Chrome")
     {

    var BrowserName = "Chrome";    //case 1
    //var BrowserName = "Safari";  //case 2
    //let BrowserName = "Chrome";  //case 3
    //let BrowserName = "Safari";  //case 4

    console.log("The Browser Name (Inside Function and INSIDE If Block) is : "+BrowserName+" ")
    }
console.log("The Browser Name (Inside Function but OUTSIDE If Block) is : "+BrowserName+" ")
}
getBrowserName(BrowserName);


/*
UNDERSTANDING:
1. The variable when declared as'var' overrides the global variable (const BrowserName = "Chrome") 
and gives INCORRECT output (Prints the value declared inside the if block)
2. The variable when declared as'let' gives the CORRECT/EXPECTED output (Prints the value declared 
    as global variable - const BrowserName = "Chrome"; )

case 1 - Chrome, Chrome
case 2 - Safari, Safari
case 3 - Chrome,Chrome
case 4 - Safari, Chrome
*/