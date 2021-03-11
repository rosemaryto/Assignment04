// IMPORT THE MODULE

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
function collection(){
let entry;
let num1;
let num2;
let opChoice;
let total;

entry = prompt("Enter first number");
num1 = parseInt(entry, 10);

entry = prompt("Enter second number");
num2 = parseInt(entry, 10); 

// CHECK TO SEE WHAT OPERATION THEY'RE USING
let i = 0;
do {
let calChoice = prompt('What operation do you want to perform? (add, subtract, multiply, divide)');
switch (calChoice){
    case "add":
        total = num1 + num2;
        alert(total);
        break;
    case "subtract":
        total = num1 - num2;
        alert(total);
        break;
    case "multiply":
        total = num1 * num2;
        alert(total);
        break;
    case "divide":
        total = num1 / num2;
        alert(total);
        break;
    default:
        alert('you have to pick add, subtract, multiply, or divide');  
}
}
while (true); 
}
// CALL THE APPROPRIATE FUNCTION

collection();
