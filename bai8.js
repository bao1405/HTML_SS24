let userInput = prompt("Nhập vào một số nguyên dương n: ");
let n = parseInt(userInput);
if (isNaN(n) || n <= 0) {
    console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
} else {
    console.log(`Dãy ${n} số nguyên tố đầu tiên:`);

    let count = 0;
    let i = 2;
    while (count < n) {
        let isPrime = true;
        
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            count++;
        }
        i++;
    }
}