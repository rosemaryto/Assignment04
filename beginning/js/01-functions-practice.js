//STEP 1
function halfNumber(x) {
    x = x / 2;
    console.log(`Half of 5 is ` + x);
}
halfNumber(5);


//STEP 2
function squareNumber(y) {
    y = y * y;
    console.log(`The result of squaring the number 3 is ` + y);
}
squareNumber(3);


//STEP 3
function percentOf(a, b) {
    b = a / b;
    console.log(b + ` is 50% of ` + a);
}
percentOf(4, 2)


//STEP 4
function findModulus(c, d) {
    d = d % c;
    console.log(d + ` is the modulus of 4 and 10`);
}
findModulus(4, 10);


//STEP 5
function numCollect() {
let totalNum=0, num, i;
for (i = 0; i < 3; i++) {
    while (true) {
        num = parseInt(prompt('Enter a number'));
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


