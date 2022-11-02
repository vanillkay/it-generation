const catUrl = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg'
const dogUrl = 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445'




// 1) Наповніть списки ul, ol елементами li, кількість елементів знаходиться в значеннях дата атрибутиів у тега div.list

// const list = document.querySelector(".list")
// const catsList = list.firstElementChild;
// const dogsList = list.lastElementChild;
// console.log(list.dataset.cats);

// const catsCount = Number(list.getAttribute("data-cats"));

// const liElArr = [];


// for(let i = 0; i < catsCount; i +=1 ){
//     const liElem = document.createElement("li");
//     const liImg = document.createElement("img");
//     liImg.src = catUrl;
    

//     liElem.append(liImg);
//     // catsList.append(liElem);
//     liElArr.push(liElem);
// }

// catsList.append(...liElArr);


// const dogsCount = Number(list.dataset.dogs);
// 1) new Array(Number(list.dataset.dogs)).fill(1)
// 2) Array.from({length: dogsCount}, _ => 1)

// console.log('1', Array.from({length: dogsCount}))
// console.log('2', new Array(Number(list.dataset.dogs)).fill(1))


// const dogsArr = Array.from({length: dogsCount})
// .map(() => `<li><img src = ${dogUrl}></li>`).join('');


// let markUp = "";

// for (let i = 1; i <= dogsCount; i +=1 ) {
//     markUp += `<li><img src=${dogUrl}></li>`
// }

// console.log(dogsArr);
// dogsList.insertAdjacentHTML("afterbegin", markUp)


// 2) Додайте на кнопки логіку для вставки значення дата атрибуту text ( на кнопці ) у елемент за айді reaction


// const elemHello = document.querySelector('.hello');
// const elemBye = document.querySelector('.bye');
// const elemTarget = document.querySelector('#reaction');

// elemHello.addEventListener('click', () => {
//     const textInsert = elemHello.dataset.text;
//     elemTarget.textContent = textInsert;
// });

// elemBye.addEventListener('click', () => {
//     const textInsert = elemBye.dataset.text;
//     elemTarget.textContent = textInsert;
// });


// const elemControls = document.querySelector('.controls');
// const elemTarget = document.querySelector('#reaction');

// elemControls.addEventListener('click', (event) => {
    
//     const clickTarget = event.target;
//     console.log(clickTarget)
//     if (clickTarget.tagName !== 'BUTTON')
//         return;
    
//     elemTarget.textContent = clickTarget.dataset.text
// })
