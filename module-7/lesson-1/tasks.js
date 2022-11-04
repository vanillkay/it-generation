// 1. Реалізувати перемикання вкладок (таби) на чистому Javascript.
//
// Технічні вимоги:
//
// 1) Потрібно, щоб після натискання на вкладку відображався конкретний текст для потрібної вкладки.
//      При цьому решта тексту має бути прихована. У коментарях зазначено, який текст має відображатися для якоїсь вкладки.

// 2) Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

// 3) Потрібно передбачити, що текст на вкладках може змінюватися і вкладки можуть додаватися і видалятися.
//      При цьому потрібно, щоб функція, написана в джаваскрипті, через такі виправлення не переставала працювати.

const ulRef = document.querySelector('.tabs');
const ulContentRefs = document.querySelectorAll('.tabs-content li');

let activeTab = document.querySelector('.tabs-title.active');
let activeContent = document.querySelector('.tabs-content li:not(.hidden)');


console.log(activeContent)
function onUlClick(e) {
    if (activeTab === null) {
        activeTab = e.target;
    }

    const content = [...ulContentRefs].find(el => el.dataset.name === e.target.textContent);


    if (content === undefined ) {
        alert("No valid tab !")
        return;
    }   

    if(activeContent === null){
        activeContent = content;    
    }

    if (activeTab === e.target) {
        activeTab.classList.toggle('active');
        activeContent.classList.toggle('hidden');
        return;
    }

    activeTab.classList.remove('active');
    e.target.classList.add('active');

    activeContent.classList.add('hidden');
    content.classList.remove('hidden');

    activeTab = e.target;
    activeContent = content;
}

ulRef.addEventListener('click', onUlClick);

//-------------

// 2. Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//
// Технічні вимоги:
//
// 1) При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
//    Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинна бути створений і додана на сторінку за допомогою Javascript.

//  2) При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола та нова кнпока "Намалювати"
//      При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл випадкового кольору.
//      При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.

// 3) У вас може виникнути бажання поставити обробник події на кожне коло для його зникнення.
//    Це неефективно, так не треба робити. На всю сторінку має бути лише один обробник подій, який це робитиме.


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const drawBtn = document.querySelector('.draw-btn');
const circlesWrap = document.querySelector('#root');

drawBtn.addEventListener('click', createInput);

function createInput() {
    const input = document.createElement('input');
    const paintBtn = document.createElement('button');
    input.placeholder = 'Введіть діаметр кола';

    paintBtn.textContent = 'Намалювати';
    paintBtn.addEventListener('click', () => onDraw(input));

    // const fragment = document.createDocumentFragment();

    // fragment.append(input, paintBtn);
    // this.after(fragment)
   
    // this.insertAdjacentElement('afterend', input);
    // this.insertAdjacentElement('afterend', paintBtn);

    // this === drawBtn
    this.after(input, paintBtn)
    this.remove();
    
}

// console.log(typeof NaN)
// console.log(-2 / 0)

// const isNaNCustom = variable => variable !== variable

// console.log(isNaNCustom(NaN))
// console.log(isNaN(NaN))

function onDraw(inputElement){
    const size = Number.parseInt(inputElement.value);
    
    if (isNaN(size)){
        alert('Enter valid diameter')
        return 
    }

    let circleStr = '';

    for (let i = 0; i < 100; i += 1) {
        circleStr += `<div class="circle" style="width: ${size}px; height: ${size}px; border-radius: 50%; background-color: ${getRandomHexColor()};"></div>`
    }

    circlesWrap.insertAdjacentHTML('afterbegin', circleStr);
}


circlesWrap.addEventListener('click', deleteCircle);

function deleteCircle(event) {
    if (event.target.classList.contains('circle')) {
        event.target.remove();
    }
}