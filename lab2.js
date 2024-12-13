// 1. Функция, которая принимает три числовых параметра и возвращает произведение двух максимальных из них
function productOfTwoMax(a, b, c) {
    const max1 = Math.max(a, b, c);
    const max2 = Math.max(a === max1 ? b : a, a === max1 ? c : b, b === max1 ? c : a);
    return max1 * max2;
}

// Пример использования функции productOfTwoMax
console.log("Произведение двух максимальных чисел:", productOfTwoMax(3, 5, 2)); // 15


// 2. Функция, которая принимает имя и звание (по умолчанию «рядовой»)
function greet(name, title = "рядовой") {
    return `Привет, ${title} ${name}!`;
}

// Примеры использования функции greet
console.log(greet("Иван")); // Привет, рядовой Иван!
console.log(greet("Петр", "капитан")); // Привет, капитан Петр!


// 3. Функция, которая принимает функциональное выражение и набор параметров для его вызова
function callFunction(func, ...params) {
    return func(...params);
}

// Пример использования функции callFunction
const sum = (a, b) => a + b;
console.log("Результат вызова функции sum:", callFunction(sum, 5, 3)); // 8


// 4. Функция, которая возвращает стрелочную функцию для возведения в степень
function powerFunction(num) {
    return num % 2 === 0 
        ? (x => x * x) // Для четных
        : (x => x * x * x); // Для нечетных
}

// Примеры использования функции powerFunction
const square = powerFunction(4);
console.log("Квадрат 5:", square(5)); // 25

const cube = powerFunction(3);
console.log("Куб 2:", cube(2)); // 8


// 5. Рекурсивная функция для расчёта факториала
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


// Пример использования функции factorial
console.log("Факториал 5:", factorial(5)); // 120
