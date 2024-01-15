let a = parseInt(prompt("Nhập số nguyên a: "));
let b = parseInt(prompt("Nhập số nguyên b: "));
if (isNaN(a) || isNaN(b)) {
    console.log("Vui lòng nhập số nguyên hợp lệ.");
} else {
    let result = Math.pow(a, b);

    console.log(`${a} ^ ${b} = ${result}`);
}