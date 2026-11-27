// Задание 1
function getMinimum(firstNumber, secondNumber) {
  return firstNumber <= secondNumber ? firstNumber : secondNumber;
}

console.log(getMinimum(8, 4));
console.log(getMinimum(6, 6));

// Задание 2
function getParity(number) {
  return number % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(getParity(4));
console.log(getParity(5));

// Задание 3
function printSquare(number) {
  console.log(number ** 2);
}

function getSquare(number) {
  return number ** 2;
}

printSquare(4);
console.log(getSquare(4));

// Задание 4
function correctAge() {
  const input = prompt('Сколько вам лет?');
  const age = Number(input);

  if (input === null || input.trim() === '' || !Number.isFinite(age) || age < 0) {
    return 'Вы ввели неправильное значение';
  }

  if (age <= 12) {
    return 'Привет, друг!';
  }

  return 'Добро пожаловать!';
}

alert(correctAge());

// Задание 5
function multiplyNumbers(firstNumber, secondNumber) {
  if (
    typeof firstNumber !== 'number'
    || typeof secondNumber !== 'number'
    || !Number.isFinite(firstNumber)
    || !Number.isFinite(secondNumber)
  ) {
    return 'Одно или оба значения не являются числом';
  }

  return firstNumber * secondNumber;
}

console.log(multiplyNumbers(3, 4));
console.log(multiplyNumbers(3, '4'));

// Задание 6
function getCubeMessage(value) {
  const input = value === undefined ? prompt('Введите число') : value;

  if (
    input === null
    || (typeof input !== 'string' && typeof input !== 'number')
    || (typeof input === 'string' && input.trim() === '')
    || !Number.isFinite(Number(input))
  ) {
    return 'Переданный параметр не является числом';
  }

  const number = Number(input);
  return `${number} в кубе равняется ${number ** 3}`;
}

alert(getCubeMessage());

for (let number = 0; number <= 10; number++) {
  console.log(getCubeMessage(number));
}

// Задание 7
const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

console.log(circle1.getArea(), circle1.getPerimeter());
console.log(circle2.getArea(), circle2.getPerimeter());
