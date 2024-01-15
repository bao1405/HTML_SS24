let userInput = prompt("Nhập vào một số nguyên dương: ");
let n = parseInt(userInput);
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let reversedNumber = parseInt(n.toString().split('').reverse().join(''));

    console.log(`Số đảo ngược của ${n} là: ${reversedNumber}`);
}