// 1. Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з текстом
// const buttonEl = document.querySelector("#hider");
// const textEl = document.querySelector("#hide");
// buttonEl.addEventListener('click',() => {
//     textEl.classList.toggle("hidden");

//     // if( textEl.classList.contains("hidden")){
//     //     buttonEl.value = "Show text!" 
//     // } else {
//     //     buttonEl.value = "Hide text!"
//     // }

//     buttonEl.value = textEl.classList.contains("hidden") ?  "Show text!" : "Hide text!"
// })


// -----------------

// 2. Створіть кнопку, при натисканні на неї вона приховуватиме сама себе.
// const buttonEl = document.createElement('button');
// buttonEl.textContent = 'HIDE ME!';
// const onClickHide = function() {
//     this.classList.add('hidden');
// }
// buttonEl.addEventListener('click', onClickHide);
// document.body.append(buttonEl);

// -----------------

// 3. У змінній button знаходиться кнопка.
// Спочатку обробників на ній немає.
// Що буде виведено під час кліку після виконання коду?

// const button = document.querySelector('.listeners')

// const func  = function() { alert("1"); };

// button.addEventListener("click", func);

// button.removeEventListener("click", func);

// console.log(button.onclick)

// -----------------


// 4. Напишіть функцію removeChildren, яка видаляє всіх нащадків елемента.

// const table = document.querySelector('table');
// const list = document.querySelector('ol');

// function removeChildren () {
//     while(list.firstElementChild !== null){
//         list.firstElementChild.remove();
//     }
// }

// removeChildren()


// -----------------

// 5. Напишіть інтерфейс, щоб створити список.
//
// Для кожного пункту:
//
// Запитуйте вміст у користувача за допомогою prompt. Створюйте пункт ( li ) і додайте його до UL.
// Процес припиняється, коли користувач натискає ESC.
// Усі елементи мають створюватися динамічно.
//
// P.S. prompt повертає null, якщо користувач натиснув на ESC.

const ulRef = document.querySelector('.insert');


// while (true) {
//     const newTextContent = prompt('Введіть новий пункт списку');
//     console.log(newTextContent)
//     if (newTextContent === null) {
//       break;
//     }
//     const newEl = document.createElement('li');
//     newEl.textContent = newTextContent;
//     ulRef.append(newEl);
// }
    

// do{
//     const newTextContent = prompt('Введіть новий пункт списку');
//     console.log(newTextContent)
//     if (newTextContent === null) {
//       break;
//     }
//     const newEl = document.createElement('li');
//     newEl.textContent = newTextContent;
//     ulRef.append(newEl);
// }while (true) 

// for(;;){
//     const newTextContent = prompt('Введіть новий пункт списку');
//     console.log(newTextContent)
//     if (newTextContent === null) {
//       break;
//     }
//     const newEl = document.createElement('li');
//     newEl.textContent = newTextContent;
//     ulRef.append(newEl);
// }
