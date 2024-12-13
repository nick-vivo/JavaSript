// 1. Создание класса Figure
class Figure {
    #x; // Приватное свойство для координаты x
    #y; // Приватное свойство для координаты y

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // Метод для получения площади фигуры (по умолчанию возвращает undefined)
    square() {
        return undefined;
    }
}


// 2. Класс Circle, наследующий Figure
class Circle extends Figure {
    #r; // Приватное свойство для радиуса

    constructor(x, y, r) {
        super(x, y); // Вызов конструктора родительского класса
        this.#r = r;
    }

    // Переопределение метода square для расчета площади круга
    square() {
        return Math.PI * this.#r * this.#r; // Площадь круга: πr²
    }
}


// 3. Класс Rectangle, наследующий Figure
class Rectangle extends Figure {
    #h; // Приватное свойство для высоты
    #w; // Приватное свойство для ширины

    constructor(x, y, h, w) {
        super(x, y); // Вызов конструктора родительского класса
        this.#h = h;
        this.#w = w;
    }

    // Переопределение метода square для расчета площади прямоугольника
    square() {
        return this.#h * this.#w; // Площадь прямоугольника: h * w
    }
}


// 4. Демонстрация работы с экземплярами дочерних классов
const circle = new Circle(0, 0, 5); // Создание круга с радиусом 5
console.log(`Площадь круга: ${circle.square().toFixed(2)}`); // Площадь круга: 78.54

const rectangle = new Rectangle(0, 0, 4, 6); // Создание прямоугольника с высотой 4 и шириной 6
console.log(`Площадь прямоугольника: ${rectangle.square()}`); // Площадь прямоугольника: 24
