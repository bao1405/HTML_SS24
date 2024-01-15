let userInput = prompt("Nhập vào một số: ");
let number = parseInt(userInput);
if (isNaN(number) || number <= 1) {
    console.log("Vui lòng nhập một số nguyên tố hợp lệ.");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} là số nguyên tố.`);
    } else {
        console.log(`${number} không phải là số nguyên tố.`);
    }
}