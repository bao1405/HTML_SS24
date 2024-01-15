let a = parseInt(prompt("Nhập số nguyên a: "));
let b = parseInt(prompt("Nhập số nguyên b: "));
let c = parseInt(prompt("Nhập số nguyên c: "));
let d = parseInt(prompt("Nhập số nguyên d: "));
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
let result = a;
}
while (c !== 0) {
    let temp = c;
    c = result % c;
    result = temp;
}
while (d !== 0) {
    let temp = d;
    d = result % d;
    result = temp;
}
console.log(`Ước chung lớn nhất của a, b, c, d là: ${result}`);