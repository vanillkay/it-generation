/*
  *
  * 1. Написати функцію-суматор всіх своїх параметрів.
  *
  * Функція приймає довільну кількість параметрів.
  * Однак кожен з них обов'язково має бути числом.
  *
  * Генерувати помилку, якщо:
  *   - Якщо функція була викликана менш ніж з двома аргументами;
  *   - Хоча один із аргументів не є допустимим числом (у помилці вказати його порядковий номер).
  *
  * Умови:
  *   - використовувати тип функції arrow function;
  *   - Використовувати об'єкт arguments заборонено.
  *   - Використати forEach
  *
  *
*/
//-------------------------

const sumNumbers = (...args) => {
  if (args.length < 2) {
    return 'Error, invalid argument';
  } else {
    let total = 0;
    args.forEach((arg, i) => {
      if (typeof arg === 'number') {
        total += arg;
      } else {
        console.log(`Error, enter please number ${i + 1}`);
      }
    })
    return total;
  }
  
}

// console.log('sum -> ', sumNumbers(null,10,2,"hello"))


// 2. Написати функцію-логгер log, яка виводить у консоль повідомлення вказану кількість разів.
//
//  Функція має два параметри:
//       - Перший - рядковий тип, повідомлення для виведення;
//       - Другий - числовий тип, кількість виведення повідомлення.
//
//  Задати значення за ЗАМОВЧУВАННЯМ для обох параметрів:
//      - Для першого - «Empty message»;
//      - Для другого - 1;
//           
//  Якщо перший аргумент (повідомлення) не передано - ЗА ЗАМОВЧУВАННЯМ присвоїти цьому аргументу - "Empty message"
//  Якщо другий аргумент (кількість разів) не переданий - ЗА ЗАМОВЧУВАННЯМ присвоїти цьому аргументу значення 1.

//  Умови:
//      - використовувати тип функції arrow function;

//-------------------------


const log = (string = 'Empty message', number = 1) => {
  for (let i = 0; i < number; i++) {
    console.log(string);
  }
}



// log("Test", 5);

/**
 *
 * 3. Написати функцію, яка повертає найбільше число, з переданих їй як аргументи під час виклику.
 *
 * Генерувати помилку, якщо:
 *  - Якщо функція була викликана менш ніж з двома аргументами;
 *  - Хоча один із аргументів не є допустимим числом (у помилці вказати його порядковий номер).
 *
 * Умови:
 *  - використовувати тип функції arrow function;
 *  - Обов'язково використовувати об'єкт Math.
 */

//-------------------------
const findMaxNumber = (...args) => {
  if (args.length < 2) {
    return  `Error, need more values`;
  }
 for (const arg of args) {
  if(typeof arg !== "number"){
    return `Error, value is not a number!`
  }
 }
  return Math.max(...args)
}


// console.log("Max nuumber -> ", findMaxNumber(2,4, 80))

// 4.Написати функцію applyFn, яка приймає на вхід 2 параметри:
//
// Масив із вхідними даними
// функцію, яку потрібно застосувати до кожного елемента масиву вхідних даних applyFn(dataArr, callback);

// Функція applyFn повинна повертати масив елментів, на яких було запущено callback


const applyFn = (dataArr, callback) => {
  
  const newArr = []; 

  dataArr.forEach((elem)  => {
    newArr.push(callback(elem));
  })

  return newArr; 
}


// console.log('First callback', applyFn([1,2,3], (element) => element * 2))
// console.log('Second callback', applyFn([1,2,3], (element) => element + 10))
// console.log('Third callback', applyFn(["HELLO", "WORLD"], (strElement) => strElement.toLowerCase()))




// 5. Перепишіть калькулятор використовуючи колбек функції та arrow function



const sum = (firstNum, secondNum) => firstNum + secondNum;
const minus = (firstNum, secondNum) => firstNum - secondNum;
const power = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;

const mathOperations = {
  "+": sum,
  "-": minus,
  "*": power,
  "/": divide,
}


    function askForNumbers(){
        const a = Number(prompt('Enter first number'))
        const b = Number(prompt('Enter second number'))
        return [a, b];
    }


    function askForOperation (){
        return prompt('Enter math operation');// +, -, *, /
    }

    function calculate(mathOperations){
        const [firstNumber, secondNumber] = askForNumbers() // [1, 4]

        const operation = askForOperation();

        if(!mathOperations.hasOwnProperty(operation)){
          return "This operation is not supported for now, please try again later ";
        }

        const mathOperation = mathOperations[operation];

        return mathOperation(firstNumber, secondNumber);
    }



    const result = calculate(mathOperations);

    console.log("Result calc -> ", result)




