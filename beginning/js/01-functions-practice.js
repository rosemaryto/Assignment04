//STEP 1
function halfNumber(num) {
    newNum = num / 2;
console.log(`Half of ${num} is ${newNum}`);
}
halfNumber(5)



//STEP 2
function squareNumber(num) {
    newNum = num * num;
console.log(`Square of ${num} is ${newNum}`);
}
squareNumber(3)


//STEP 3
function percentOf(num1, num2) {
    newNum = parseInt(num1 / num2 * 100) ;
console.log(`Percent of ${num1} is ${newNum} % of ${num2}`);
}
percentOf(3,9)


//STEP 4
function findModulus(num1, num2) {
    newNum = num2 % num1 ;
console.log(`${newNum} is modulus of ${num1} and ${num2}`);
}
findModulus(4,10)


//STEP 5
function numCollect() {
let totalNum=0, num, i;
for (i = 0; i < 3; i++) {
    while (true) {
        num = parseInt(prompt('Enter 3 numbers to add'));
        if (num >= 0 && num <= 50) {
            totalNum += num;
            break;
        } else {
            console.error('Number must be between 0 and 50.');
        }
    }
}
console.log(`The total is: ${totalNum}`);
}
numCollect();


