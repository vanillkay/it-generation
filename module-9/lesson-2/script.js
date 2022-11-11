// 1) Використовуйте Promise.resolve(value), щоб створити Promise, який успішно виконається зі значенням 3.

//----------------
// const promise = new Promise((resolve) => {

// })

const value = 3;
// Promise.resolve(value).then((result) => {console.log('From then ' + result)});





// 2) Використовуйте Promise.reject(error), щоб створити Promise, яки відхилятиметься зі значенням "Boo!"
const error = 'Boo!'
    // Promise.reject(error).catch(result => console.log('From catch ' + result))
    //----------------

// 3) Допишіть функцію нижче. Використовуйте конструктор Promise, щоб створити Promise, який:
//      виконається, якщо itShouldResolve є true
//      відхилятиметься, якщо itShouldResolve є false

function shouldResolve() {
    return Math.random() > 0.5;
}



// const promise = new Promise((resolve, reject) => {

// if (shouldResolve()){
//     return resolve('Done')
// }

// reject('err');

// }).then( (data) => {
//     console.log('Then ' + data);
// })
// .catch ( (err) => {
//     console.log('Catch ' + err);
// })
// .finally( () => {
//     console.log('Finaly'); 
// });




// console.log('Hello', )




//----------------

// 4) Написати функцію delay. Вона повинна повертати проміс,
// який перейде в стан "виконаний" через ms мілісекунд, так щоб ми могли додати до нього .then:



function delay(time) {
    return new Promise((resolve, reject) => {
        const itShouldResolve = shouldResolve();
        setTimeout(() => {
            const result = itShouldResolve ? resolve(time) : reject(time);
        }, time)
    })
}

// const delayPromise = delay(1000);

// console.log('promise', delayPromise)
// delayPromise
// .then((mlSeconds) => alert(`done after ${mlSeconds / 1000} seconds`))
// .catch(mlSeconds => alert(`rejected after ${mlSeconds / 1000} seconds`));

//-----------------

// 5) Написати функцію яка буде отримувати в параметрах проміс та колбек. Запустити колбек після виконання промісу за допомогою then

// const prom = new Promise((resolve) => {
//     resolve('Done');
// });

// function callback(result) {
//     console.log('From callback ' + result);
// }

// function start(promise, callback) {
//     promise.then(callback);
// }

// start(delay(1000), callback);

//-----------------

// 6) Написати функцію яка буде отримувати в параметрах проміс та два колбеки. Запустити перший колбек після успішного виконання промісу за допомогою then
// або ж запустити другий колбек якщо при виконанні промісу виникла помилка

// const prom = new Promise((resolve, reject) => {
//     const itShouldResolve = shouldResolve();
//     itShouldResolve ? resolve('Done') : reject('Error');
// });

// function success(result) {
//     console.log('From success ' + result);
// }

// function failure(result) {
//     console.log('From failure ' + result);
// }

// function start(promise, success, failure) {
//     promise.then(success).catch(failure);
// }

// start(prom, success, failure);

//-----------------

// 7) Модифікуйте функцію з 4-го завдання щоб вона отримувала в параметри також булеве значення
// ( виповниться проміс чи відхилиться ) та значення яке потрібно повернути якщо проміс виконається успішно


function delay(time, shouldResolved) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldResolved ? resolve(time) : reject(time);
        }, time)
    })
}

// delay(2000, shouldResolve())
//     .then((mlSeconds) => alert(`done after ${mlSeconds / 1000} seconds`))
//     .catch((mlSeconds) => alert(`Error!`));

//-----------------

// 8) Напишіть функцію яка генерує потрібну кількість промісів та записує їх у масив який потім повертає.
// Функція буде мати два аргументи - кількість промісів та першочергову затримку.
// Проміс буду виконуватись успішно за умови якщо його порядковий номер непарний, а якщо парний - проміс буде хибним
// Для кожного промісу пілся першого додавати до затримки пів секунди

// function createNewArr(promiseCount, delayMs) {

//     const newArr = [];
//     for (let i = 1; i <= promiseCount; i += 1) {
//         const newPromise = delay(delayMs, i % 2 !== 0)
//         newPromise.then(res => console.log('succes', res))
//             .catch(err => console.log('Error', err))
//         delayMs += 500;
//         newArr.push(newPromise);
//     }

//     return newArr;
// }


// const promises = createNewArr(10, 1000);

// console.log(promises);

// Promise.all(promises).then((results) => console.log(results)).catch(err => console.log('Error', err))


// -----------------

// 9) Напишіть функцію яка очікує необмежену кількість промісів, чекає коли вони усі виповняться
// та виводить їх значення у консоль у форматі 'Promise 1 was resolved with value 5'


// function generateRandomNum() {
//     return Math.floor(Math.random() * 5 + 1);
// }

// function generatePromises(promisesCount) {

//     const promisesArr = [];

//     for (let i = 0; i < promisesCount; i += 1) {
//         promisesArr.push(Promise.resolve({ positon: i + 1, value: generateRandomNum() }))
//     }

//     return promisesArr;
// }

// const promises = generatePromises(15);

// console.log(Promise.all(promises))
// Promise.all(promises).finally(() => console.log('finaly')).then((promisesArray) => {
//     promisesArray.forEach(({ positon, value }) => {
//         console.log(`Position ${positon} was resolved with value ${value}`)
//     })
// })



// Timeout sort

// const sortArr = [1,4,12,54,23,63,3,9,5]


// const sorted = [];
// sortArr.forEach((num) => {
//     setTimeout(() => {
//         console.log(num)
//         sorted.push(num);
//     }, num )
// })


// console.log(sorted);


// setTimeout(() => console.log(sorted), 1000)