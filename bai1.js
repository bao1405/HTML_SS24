let userInput = prompt("Nhập vào một số nguyên dương: ");
let n = parseInt(userInput);
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    console.log(`Bình phương các số nguyên dương chẵn từ 1 đến ${n}:`);
    for (let i = 2; i <= n; i += 2) {
        let square = i * i;
        console.log(`${i} ^ 2 = ${square}`);
    }
}