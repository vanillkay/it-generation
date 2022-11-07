// Створити таблицю, при натисканні на комірки якої вони змінюватимуть колір.
//
// Технічні вимоги:
//
//  1) Створити поле 30*30 із білих клітинок з допомогою елемента <table>.
//  2) При натисканні на білу клітинку вона повинна змінювати колір на чорний. 
//          При натисканні на чорну клітинку вона повинна змінювати колір назад на білий.
//  3) Сама таблиця повинна бути не вставлена у вихідний HTML-код, а згенерована і додана в DOM сторінки за допомогою Javascript.
//  4) При натисканні на будь-яке місце документа поза таблицею, всі кольори клітин повинні змінитися на протилежні (підказка: необхідно поставити Event Listener на <body>).
//  5) Щоб змінити кольори всіх клітин одночасно, не потрібно обходити їх у циклі. Якщо помічати натиснуті клітини певним класом, то перефарбувати їх всі одночасно можна однією дією - змінивши клас на самій таблиці.

const root = document.querySelector('#root');
const table = document.createElement('table');

for (let i = 1; i <= 50; i += 1) {
    const trEl = document.createElement('tr');
    for (let j = 1; j <= 50; j += 1) {
        const tdEl = document.createElement('td');
        // if (j % 2 === 0 && i % 2 !== 0) {
        //     tdEl.classList.add('black')
        // }
        // if (j % 2 !== 0 && i % 2 === 0) {
        //     tdEl.classList.add('black')
        // }
        tdEl.classList.add('cell');
        trEl.append(tdEl);
    }
    table.append(trEl);
}
root.append(table);

// function onCellClick (event) {
//     const { target } = event;
    
//     if (target.classList.contains('cell')) {
//         target.classList.toggle('black')
//     }

//     if (target.tagName === 'BODY') {
//         table.classList.toggle('reverse')
//     }

// }

// document.body.addEventListener('click', onCellClick)
function onCellOver(event) {
    const { target } = event;
    if (target.classList.contains('cell') ) {
        target.classList.add(table.classList.contains('reverse') ? 'white' : 'black')
    }
}


const onBodyClick = () => {
    table.classList.toggle('reverse')
}

document.body.addEventListener('click', onBodyClick)

let isEventSet = false;
document.addEventListener('keydown', (event) => {
    if (event.key === 'b' && !isEventSet) {
            isEventSet = true;
            console.log(event)
            table.addEventListener('mouseover', onCellOver)
    }
    
})
document.addEventListener('keyup', (event) => {
    if (event.key === 'b' && isEventSet) {
            isEventSet = false;
            console.log(event)
            table.removeEventListener('mouseover', onCellOver)
    }
})

