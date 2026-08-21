/*
## *Assignment Details:*
Write a JavaScript program to observe how the same variable name behaves:
* in *global scope*,
* inside a *function*, and
* inside an *if-block* using both var and let.
* */


let Gendertype = "Female"
//var Gendertype = "Female" // Not preferred when compared to 'let'

function PrintGender(Gendertype)
{
//var color="Brown(Var)"
let color="Brown(Let)"
if (Gendertype = "Male")
    {
var Age=30
//let Age=40 //Since let is specific inside If block, Age=40 cannot be called outside If block. Hence, statement in Line22 (Age OUTSIDE IF BUT INSIDE FUNCTION) doesnt work. ReferenceError: Age is not defined 
let color="Pink"
console.log("Blocked scope - Color INSIDE IF block is "+color)
}

console.log("Function scope - Color OUTSIDE IF block is "+color)
console.log("Function scope - Age OUTSIDE IF BUT INSIDE FUNCTION is "+Age)
}
PrintGender(Gendertype)
console.log("Global variable - Gender is "+Gendertype)
