/*
Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result.
Hints to Solve:
Use a `switch` statement with `true` for score range checks to assign grades.
*/

function Grade(Marks) 
{
switch (true){
        case Marks>90:
         console.log("Student Mark is "+Marks+" and Grade is A");
            break;
       case Marks>60 && Marks<=90:
         console.log("Student Mark is "+Marks+" and Grade is B");
            break;
        case Marks>30 && Marks<=60:
         console.log("Student Mark is "+Marks+" and Grade is C");
            break;    
        default:
        console.log("Student Mark is "+Marks+" and Grade is D");
}
}
Grade("60")

