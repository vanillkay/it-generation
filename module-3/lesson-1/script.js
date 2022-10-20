// 1. Напишіть функцію isEmpty, яка робить  перевірку об'єкта на порожнечу.

// const data = { a: 1, };
// const data2 = {  };

// function isEmpty(obj){
//     return  Object.keys(obj).length === 0;
//     // if (Array.length === 0) {
//     //     return true;
//     // }
//     // else { return false }
// }

// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

//-------------------------

// // 2. Напишіть функцію isEqual, яка  порівнює два об'єкти.

// const first = { a: 1, b: 1, };

// const second = { a: 1, b: 1 };


// // const third = { a: 1 };

// function isEqual(firstObj, secondObj) {

//         if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
//             return false;
//         }
//     for (const key in firstObj) {
//         if (secondObj.hasOwnProperty(key)) {
//             const firstValue = firstObj[key];
//             const secondValue = secondObj[key];
//             if (firstValue !== secondValue) {
//                 return false;
//             }

//         } else {
//             return false;
//         }
//     }
//     return true
// }

// console.log(isEqual(first, second)); // true


// console.log('result', isEqual(first, third)); // false

// -------------------------

// 3. Створіть функцію topSalaryWorker (salaries), яка повертає ім'я найбільш оплачуванного працівника.
// Якщо об'єкт salaries порожній, потрібно повернути null.
// Використовуйте Object.entries, щоб перебрати пари ключ/значення.

const salaries = {
     "John": 172300,
  "Pete": 300,
  "Mary": 200,
  "Joe": 400
};

function topSalaryWorker (salaries) {

    const salariesEntries = Object.entries(salaries);
    let topSalary = 0;
    let topSalaryWorker = '';
    
    if (salariesEntries.length === 0) {
        return null;
    }

    console.log('entiies', salariesEntries)
    for (const worker of salariesEntries) {
        if (worker[1] > topSalary) {
            topSalaryWorker = worker[0];
            topSalary = worker[1];
        }
        
    }
    return topSalaryWorker;


}


//  console.log(topSalaryWorker(salaries))

//--------------------------

// 4. Реалізувати функцію створення об'єкта "користувач".

// 1) Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// 2) При виклику функція повинна запитати  ім'я та прізвище.
// 3) Використовуючи дані, введені користувачем, створити об'єкт newUser з властивостями firstName та lastName.
// 4) Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені користувача, з'єднану з прізвищем користувача, все в нижньому регістрі
// (наприклад, Ivan Kravchenko → ikravchenko).
// 5) Створити користувача за допомогою функції createNewUser(). Викликати функцію користувача getLogin(). Вивести у консоль результат виконання функції.

function createNewUser() {
const firstName = prompt(`Ваше ім&#39;я`);
const lastName = prompt('Ваше прізвище');
const newUser = {
    firstName,
    lastName,
    getLogin(){
        const login = (this.firstName[0] + this.lastName).toLowerCase();
        return login;
    }
};
return newUser;
}
                                               
const userObj = createNewUser();



console.log('User object -> ', userObj)
console.log('User login -> ', userObj.getLogin())
