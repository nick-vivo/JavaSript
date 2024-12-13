// 1. Создание объекта в формате JSON
const studentData = {
    surname: "Иванов",
    name: "Иван",
    marks: [
        { subject: "Математика", mark: 5 },
        { subject: "Физика", mark: 4 },
        { subject: "Химия", mark: 5 }
    ]
};


// Функция для вывода информации о студенте
function displayStudentInfo(student) {
    console.log(`Фамилия: ${student.surname}`);
    console.log(`Имя: ${student.name}`);
    console.log("Оценки:");
    student.marks.forEach(mark => {
        console.log(`  ${mark.subject}: ${mark.mark}`);
    });
}

// Вызов функции для отображения информации
displayStudentInfo(studentData);


// 2. Создание классов Student и Mark
class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}


class Student {
    constructor(surname, name) {
        this.surname = surname;
        this.name = name;
        this.marks = [];
    }

    // 3. Метод для добавления оценки
    addMark(subject, mark) {
        const newMark = new Mark(subject, mark);
        this.marks.push(newMark);
    }

    // 4. Метод для получения средней оценки
    getAverageMark() {
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return totalMarks / this.marks.length || 0; // Возвращает 0, если оценок нет
    }

    // 5. Метод для получения всех оценок по предмету
    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    // 6. Метод для удаления всех оценок по предмету
    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}


// Пример использования класса Student
const student = new Student("Иванов", "Иван");
student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Химия", 5);

console.log(`Средняя оценка студента: ${student.getAverageMark()}`); // Средняя оценка студента: 4.666666666666667

console.log("Оценки по Физике:", student.getMarksBySubject("Физика")); // Оценки по Физике: [ Mark { subject: 'Физика', mark: 4 } ]

student.removeMarksBySubject("Физика");
console.log("Оценки после удаления Физики:", student.marks); // Оценки после удаления Физики: [ Mark { subject: 'Математика', mark: 5 }, Mark { subject: 'Химия', mark: 5 } ]
