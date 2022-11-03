// 1. Реалізувати функцію, яка отримуватиме масив елементів і виводитиме їх на сторінку у вигляді списку.

// Створити функцію, яка прийматиме на вхід масив. // Done
// Кожен із елементів масиву вивести на сторінку у вигляді пункту списку
// Необхідно використовувати шаблонні рядки та функцію map масиву для формування контенту списку перед виведенням його на сторінку.
// Якщо всередині масиву одним із елементів буде ще один масив або об'єкт, виводити його як вкладений список.

const listArray = [2,3,5,6,undefined, 'hello', [2,35,[3,5],785,23],  {a: 1, b: null, c: 'asdas'}];

Array.isArray([])// true
Array.isArray({})// false


function getObjectList(obj){
    return  `
    <li>
        <ol>
            ${
                Object.entries(obj)
                .map(([key, value]) => `<li>${key} = ${value}</li>`)
                .join("")
            }
        </ol>
    </li>`
}


function inputArray(listArray) {
    return `
    <ul>${listArray.map((element) => {
        if(Array.isArray(element)){
            return `<li>${inputArray(element)}</li>` // <li><ul><li>2</li></ul>
        }

        if(typeof element === "object" && element !== null) {
            return getObjectList(element);
        }
        return `<li>${element}</li>`
    }).join("")}
    </ul>`
   
}


function find_fact(number){
    if(number === 1){
        return 1;
    }

    return number * find_fact(number - 1)
}

console.log('Fact 5 -> ', find_fact(4))



function inputArrayV2(list){
    return `
    <ul>
        ${list.reduce((acum, element) => acum + `<li>${Array.isArray(element) ? inputArrayV2(element) : element}</li>`, '')}
    </ul>`
}

// const divVariable = document.querySelector(".list");
// divVariable.innerHTML = inputArray(listArray);
//--------------------------


// 2. Реалізувати функцію підсвічування клавіш.

// У файлі index.html лежить розмітка кнопок.
// Кожна кнопка містить назву клавіші на клавіатурі
// Після натискання вказаних клавіш - та кнопка, на якій написана ця літера, повинна фарбуватись у синій колір.
// При цьому якщо якась інша літера вже раніше була пофарбована в синій колір - вона стає чорною.
// Наприклад, за натисканням Enter перша кнопка забарвлюється в синій колір.
// Далі користувач натискає S, і кнопка S фарбується в синій колір, а кнопка Enter знову стає чорною.


const obj = {
    a: 1, 
    b: 3
}




function checkClickKey(classMethod, event){
    symbolEl.forEach(element => {
        if(element.textContent.toUpperCase() === event.key.toUpperCase()){
            if(classMethod in element.classList){
                element.classList[classMethod]("active")
            }
        }
     })
}


const getClickFunction = (classMethod) => (event) => checkClickKey(classMethod, event)


const symbolEl = document.querySelectorAll(".symbol");


document.addEventListener("keydown", getClickFunction('asdasd')) // (event) => checkClickKey('add', event)
 
 
 document.addEventListener("keyup", (event) => checkClickKey('remove', event))


// document.addEventListener("keydown", event => {
//    symbolEl.forEach(element => {
//     if(element.textContent.toUpperCase() === event.key.toUpperCase()){
//         element.classList.add("active")
//     }
//    })
// //    const symbolElement = [...symbolEl].find(element => element.textContent.toUpperCase() === event.key.toUpperCase())


// //    if(symbolElement !== null){
// //     symbolElement.classList.add("active")
// //    }


// })


// document.addEventListener("keyup", event => {
//     console.log(event) 
//     symbolEl.forEach(element => {
//      if(element.textContent.toUpperCase() === event.key.toUpperCase()){
//          element.classList.remove("active")
//      }
//     })

//     //    const symbolElement = [...symbolEl].find(element => element.textContent.toUpperCase() === event.key.toUpperCase())


// //    if(symbolElement !== null){
// //     symbolElement.classList.remove("active")
// //    }
//  })