// 1. Проверка на простоту
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


// 2. Автоморфные числа на отрезке [a, b]
function isAutomorphic(num) {
    const square = num * num;
    return square.toString().endsWith(num.toString());
}


// 3. Проверка на совершенное число
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}


// 4. Проверка на избыточное число
function isAbundant(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum > num;
}


// 5. Проверка на негипотенузное число
function isNonHypotenuse(num) {
    for (let a = 1; a < num; a++) {
        for (let b = a; b < num; b++) {
            const c = Math.sqrt(a * a + b * b);
            if (Number.isInteger(c) && c <= num) return false; // Если c - целое и меньше или равно num
        }
    }
    return true;
}


// 6. Числа Армстронга на отрезке [a, b]
function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
}


// 7. Первые n Пифагоровых троек
function pythagoreanTriples(n) {
    const triples = [];
    for (let a = 1; triples.length < n; a++) {
        for (let b = a; triples.length < n && b < 100; b++) { // b < 100 для ограничения
            const c = Math.sqrt(a * a + b * b);
            if (Number.isInteger(c)) {
                triples.push([a, b, c]);
            }
        }
    }
    return triples.slice(0, n);
}


// Примеры использования:
console.log("Проверка на простоту для 29:", isPrime(29));
console.log("Автоморфные числа от 1 до 100:");
for (let i = 1; i <= 100; i++) {
    if (isAutomorphic(i)) console.log(i);
}
console.log("Проверка на совершенное число для 28:", isPerfect(28));
console.log("Проверка на избыточное число для 12:", isAbundant(12));
console.log("Проверка на негипотенузное число для 10:", isNonHypotenuse(10));
console.log("Числа Армстронга от 1 до 1000:");
for (let i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) console.log(i);
}
console.log("Первые 5 Пифагоровых троек:", pythagoreanTriples(5));
