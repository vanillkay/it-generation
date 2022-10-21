// 1. Даний масив. Запишіть перший елемент цього масиву в змінну elem1, другий - в змінну elem2, третій - в змінну elem3,
// а всі інші елементи масиву - змінну arr

const newArr = [1,2,3,4,5,6,7];

const [elem1, elem2, ...elem3] = newArr;


// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

//--------------------------


// 2. Даний об'єкт obj. Запишіть відповідні значення змінні name, surname за допомогою деструктуризації.
// Зробіть так, щоб, якщо якесь значення не задано - воно набирало наступного значення за замовчуванням: 
// {name: 'Анонім', surname: 'Анонімович', age: '? років' Ї

const obj = {
 name: 'John',
 surname: 'Smith',
 age: 20,
}

const {name = 'Анонім',  surname = 'Анонімович', age = '? років'} = obj;
// console.log (name, surname, age);


//--------------------------

// 3. Перепишіть приклад використовуючи деструктуризацію

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
       maths: 10,
       english: 11,
       science: 9
    }
};


function displaySummary({
    name,
    scores: {
        maths = 0,
        english = 0,
        science = 0
    }
}) {
   
    console.log(`Hello, ${name}`);
    console.log(`Your Maths score is ${maths}`);
    console.log(`Your English score is ${english}`);
    console.log(`Your Science score is ${science}`);
}
// displaySummary(student);
// Hello, John Doe
// Your Maths score is 74
// Your English score is 63
// Your Science score is 85

//--------------------------



// 4. Проведіть операції з деструктуризації масиву
// 1) Перемістіть значення масиву rgb в окремі змінні red, green, blue та виведіть їх у консоль ( R: red, G: green, B: blue )
// 2) Додайте дефолтне значення 255 для red та blue
// 3) Пропустіть перші два елементи та призначте лише третій елемент змінній blue

// const rgb = [255,200,126];
// const [red = 255, green, blue = 255] = rgb;

// const[, , blue] = rgb;

// const [last] = rgb.reverse()

// console.log(blue, last);
//--------------------------

// 5. Поміняйте значення двох змінних між собою за допомогою масивів на деструктуризації

let width = 300;
let height = 400;
// let temp = width;
// width = height;
// height = temp;

[height, width] = [width, height]; // [300, 400]

// width = 400;
// height = 300;
// console.log(width);
// console.log(height);



//--------------------------

// 6.Напишіть функцію, яка створює змінні з ім'ям пірата ,
// а також – його статусом серед інших піратів та виводіть їх в консоль. Якщо статусу немає – він за замовчуванням "матрос"

const pirates = "Джон; Джек капітан; Енко кухар; Вася юнга; Інгрід";

// Приклад виводу у консоль:
// Джон - матрос
// Джек - капітан
// Енко - кухар
// Вася - юнга
// Інгрід - матрос

function makePirate (piratesNames) {
    const arr = piratesNames.split('; ')
    for (let item of arr) {
        const [pirateName, pirateStatus =  "матрос"] = item.split(' ');
        console.log(`${pirateName} - ${pirateStatus}`)
    }
}

// makePirate(pirates);

//--------------------------

// 7. Напишіть функцію, яка створює об'єкт.
// Як аргументи вона приймає в себе ім'я, прізвище, і перелік
// рядків формату "ім'яВластивості: значення". Їх може бути багато.
//
// Приклад роботи:
// const user = createObject("Іван", "Іванів", "wife: Анна", "car: Toyota",);
//  console.log(user);
/*
{
    name: "Іван",
    lastName: "Іванів",
    wife: "Анна",
    car: "Toyota",
    position: "director"
}
*/
// Використовуйте оператор rest та дестрктуризацію масиву

function createObject(name, surname, ...rest) {
    const props = {};

    for (const item of rest) {
        const [key, value] = item.split(': ');
        props[key] = value;
    }

    return {
        name,
        surname,
        ...props,
    }
}

//--------------------------

// 8. У вас є 2 масиви - об'єднайте їх вміст (через функцію) в один totalCars максимально елегантним способом

// - другий елемент array2
// - елементи array1 без першого елемента
// - Перший елемент array1
// - елементи array2 без другого елемента

// ['другий елемент array2', 'елементи array1 без першого елемента', 'Перший елемент array1', 'елементи array2 без другого елемента']
// ["Bugatti", "Ford", "Alfa Romeo", "Audi", "BMW", "Cadillac", "Lexus", "Chevrolet", "Ferrari"]

const johnCars = ["Cadillac", "Ford", "Alfa Romeo", "Audi", "BMW", ];
const maryCars = ["Lexus", "Bugatti", "Chevrolet", "Ferrari",];

function connectArrays(arrayOne, arrayTwo) {
    //          "Cadillac",     ["Ford", "Alfa Romeo", "Audi", "BMW"]
    const [elementOneArrayOne, ...restArrayOne] = arrayOne 
    //        "Lexus",              "Bugatti",     ["Chevrolet", "Ferrari"]
    const [elementOneArrayTwo, elementTwoArrayTwo, ...restArrayTwo] = arrayTwo

    return [
        elementTwoArrayTwo, // "Bugatti" - другий елемент array2
        ...restArrayOne, //  ["Ford", "Alfa Romeo", "Audi", "BMW"] - елементи array1 без першого елемента
        elementOneArrayOne, // "Cadillac" - Перший елемент array1
        elementOneArrayTwo, // "Lexus" - елементи array2 без другого елемента
        ...restArrayTwo // ["Chevrolet", "Ferrari"] - елементи array2 без другого елемента
    ]
}

console.log(connectArrays(johnCars, maryCars))

//--------------------------
