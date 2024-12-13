// 1. Поиск общих элементов в двух массивах с использованием Set
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1); // Создаем множество из первого массива
    const set2 = new Set(arr2); // Создаем множество из второго массива

    const commonElements = [...set1].filter(element => set2.has(element)); // Фильтруем элементы, которые есть в обоих множествах

    return commonElements; // Возвращаем массив общих элементов
}

// Пример использования функции
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(`Общие элементы: ${findCommonElements(array1, array2)}`); // [4, 5]


// 2. Подсчет количества вхождений каждого элемента в массиве с использованием Map
function countOccurrences(arr) {
    const occurrences = new Map(); // Создаем новую карту для хранения вхождений

    for (const element of arr) {
        occurrences.set(element, (occurrences.get(element) || 0) + 1); // Увеличиваем счетчик для каждого элемента
    }

    return occurrences; // Возвращаем карту с количеством вхождений
}


// Пример использования функции
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const result = countOccurrences(fruits);
console.log('Количество вхождений:');
result.forEach((count, fruit) => {
    console.log(`${fruit}: ${count}`);
});
// apple: 2
// banana: 3
// orange: 1


// 3. Подсчет числа обучающихся в самой большой группе
class Student {
    constructor(name, group) {
        this.name = name; // Имя студента
        this.group = group; // Номер группы
    }
}


function countStudentsInLargestGroup(students) {
    const groupCount = new Map(); // Создаем карту для подсчета студентов в группах

    for (const student of students) {
        groupCount.set(student.group, (groupCount.get(student.group) || 0) + 1); // Увеличиваем счетчик для группы
    }

    // Находим максимальное количество студентов в группе
    let maxCount = 0;
    groupCount.forEach(count => {
        if (count > maxCount) {
            maxCount = count; // Обновляем максимальное количество
        }
    });

    return maxCount; // Возвращаем максимальное количество студентов в группе
}


// Пример использования функции
const students = [
    new Student('Alice', 'A'),
    new Student('Bob', 'B'),
    new Student('Charlie', 'A'),
    new Student('David', 'B'),
    new Student('Eve', 'B'),
    new Student('Frank', 'C')
];

console.log(`Количество студентов в самой большой группе: ${countStudentsInLargestGroup(students)}`); // 3
