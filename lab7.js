// Класс для представления студента
class Student {
    constructor(firstName, lastName, averageGrade) {
        this.firstName = firstName; // Имя студента
        this.lastName = lastName; // Фамилия студента
        this.averageGrade = averageGrade; // Средняя оценка
    }
}


// 1. Функция сортировки массива студентов по средней оценке (сортировка Шелла)
function shellSort(students) {
    const n = students.length;
    let gap = Math.floor(n / 2); // Начальный интервал

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j;
            for (j = i; j >= gap && students[j - gap].averageGrade > temp.averageGrade; j -= gap) {
                students[j] = students[j - gap]; // Сдвигаем элементы
            }
            students[j] = temp; // Вставляем элемент в правильную позицию
        }
        gap = Math.floor(gap / 2); // Уменьшаем интервал
    }
}


// 2. Функция бинарного поиска студента по фамилии и имени
function binarySearch(students, firstName, lastName) {
    let left = 0;
    let right = students.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const student = students[mid];

        // Сравниваем фамилию и имя
        if (student.firstName === firstName && student.lastName === lastName) {
            return mid; // Возвращаем индекс найденного студента
        }

        // Если имя и фамилия меньше, двигаемся влево
        if (student.lastName < lastName || (student.lastName === lastName && student.firstName < firstName)) {
            left = mid + 1;
        } else {
            right = mid - 1; // Иначе двигаемся вправо
        }
    }

    return -1; // Если студент не найден
}


// Пример использования
const students = [
    new Student('John', 'Doe', 3.5),
    new Student('Jane', 'Smith', 4.0),
    new Student('Alice', 'Johnson', 3.8),
    new Student('Bob', 'Brown', 2.9),
    new Student('Charlie', 'Davis', 3.2)
];


// Сортируем студентов по средней оценке
shellSort(students);
console.log('Отсортированные студенты по средней оценке:');
students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}: ${student.averageGrade}`);
});


// Сортируем студентов по фамилии и имени для бинарного поиска
students.sort((a, b) => {
    if (a.lastName === b.lastName) {
        return a.firstName.localeCompare(b.firstName); // Сравниваем по имени, если фамилии равны
    }
    return a.lastName.localeCompare(b.lastName); // Сравниваем по фамилии
});


// Пример поиска студента
const firstNameToSearch = 'Alice';
const lastNameToSearch = 'Johnson';
const index = binarySearch(students, firstNameToSearch, lastNameToSearch);


if (index !== -1) {
    console.log(`Студент найден: ${students[index].firstName} ${students[index].lastName}, Средняя оценка: ${students[index].averageGrade}`);
} else {
    console.log(`Студент с именем ${firstNameToSearch} и фамилией ${lastNameToSearch} не найден.`);
}
