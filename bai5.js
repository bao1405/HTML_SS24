let userInput = prompt("Nhập vào một số nguyên dương n: ");
let n = parseInt(userInput);
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum += 1 / Math.pow(i, 3);
    }
    sum = sum.toFixed(5);
    console.log(`Kết quả biểu thức S = 1 + 1/2^3 + 1/3^3 + ... + 1/${n}^3 là: ${sum}`);
}