
// Одномерные массивы. Функция, которая принимает на вход массив вещественных чисел и возвращает количество элементов, неравных своему предыдущему.
function countDifferentFromPrevious(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0; // Возвращаем 0, если входной массив пустой или не является массивом
    }

    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            count++;
        }
    }

    return count; // Возвращаем количество элементов, не равных предыдущему
}


// Многомерные массивы. Функция, которая принимает на вход вещественную прямоугольную матрицу и возвращает одномерный массив, состоящий из минимальных элементов соответствующих столбцов матрицы.
function findColumnMinima(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        return []; // Возвращаем пустой массив, если входная матрица некорректна
    }

    const columnCount = matrix[0].length; // Количество столбцов
    const minima = new Array(columnCount).fill(Infinity); // Инициализируем массив с бесконечностями

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (matrix[i][j] < minima[j]) {
                minima[j] = matrix[i][j]; // Обновляем минимальное значение для столбца j
            }
        }
    }

    return minima; // Возвращаем массив минимальных значений по столбцам
}


// Пример использования функции для одномерных массивов
const numbers = [1.5, 1.5, 2.0, 2.0, 3.0, 3.0, 4.0];
console.log(`Количество элементов, не равных предыдущему: ${countDifferentFromPrevious(numbers)}`); // 4

// Пример использования функции для матрицы.
const matrix = [
    [1.2, 3.4, 5.6],
    [7.8, 0.1, 2.2],
    [4.4, 5.5, 1.1]
];

console.log(`Минимальные элементы по столбцам: ${findColumnMinima(matrix)}`); // [1.2, 0.1, 1.1]
