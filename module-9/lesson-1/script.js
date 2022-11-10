// 1) Потрібно створити інтервал, який виводить у консоль кількість секунд, що минули з моменту запуску програми.
//
// "Минуло: 1 сек."
//
// "Минуло: 2 сек." ..... і так далі



// const getContactInfo = (id) => {name: 'John'}


// const getOnContactClick = (id) => getContactInfo(id);


// onClick={() => getContactInfo(id)}
// onClick={getOnContactClick(id)}

// const getIntervalFunc = () => {
    // let timerNum = 0;
//     return () => {
//         timerNum += 1;
//         console.log(`Минуло: ${timerNum} сек.`)}
// }

// const timerId = setInterval(getIntervalFunc(), 1000);

// console.log('timer id', timerId)

let timerNum = 0;

// const showSeconds = () => {
//     timerNum += 1;
//     console.log(`Минуло: ${timerNum} сек.`)
//     setTimeout(showSeconds, 1000)
// }

// setTimeout(showSeconds, 1000)


//--------------------

// 2) Допишіть програму з першого завдання так, щоб вона зупинялася при досягненні 5 секунд

// let timerNum = 0;
// const stopNumber = 5;
// const timerId = setInterval(() => {
//     if (timerNum === stopNumber) {
//         clearInterval(timerId);
//         return;
//     }
//     timerNum += 1;
//     console.log(`Минуло: ${timerNum} сек.`)}, 1000);

// console.log('timer id', timerId)


// function showSeconds(){
//     let seconds = 0;
//     const stopSecond = 5;

//     window.setTimeout(function go(){
//         if(seconds === stopSecond){
//             return
//         }
//         seconds += 1;
//         console.log(`Минуло: ${seconds} сек.`)
//         window.setTimeout(go, 1000)

//     }, 1000)
// }


// showSeconds();

//--------------------



// 5 10
// 5 6 7 8 9 10 -> console

// 3) Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду, починаючи з from і закінчуючи to.





function printNumbers(from, to){
    const intervalId = setInterval(print, 1000);

    function print(){
        if (from > to) {
            clearInterval(intervalId);
            return;
        }
        console.log(from);
        from += 1;
    }
}

// printNumbers(2, 10)
//--------------------

// 4) Напишіть функію яка буде зчитувати з інпута введену дату,
// та виводити на сторінку різницю секунд хвилин годин днів віддосно сьогоднішної дати




function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

const inputedDate = document.querySelector('input');
const resultEl = document.querySelector('#root');



const readDate = (e) => {
    console.log(Date.now())
    console.log(new Date('2022-10-6').getTime())
    const deltaTime = Date.parse(e.target.value) - Date.now();
    if (deltaTime < 0) {
        alert('Ви ввели минулий час');
        return;
    }
        
    const {days, hours, minutes, seconds} = convertMs(deltaTime);
   
    const timeStr = `Left Days:${days} Hours:${hours} Minutes:${minutes} Seconds:${seconds}`;
    resultEl.textContent = timeStr;
}

inputedDate.addEventListener('change', readDate);

  
//--------------------

// 5) Реалізувати програму, що показує циклічно різні картинки.

// Технічні вимоги:
//
// При запуску програми на екрані має відображатись перша картинка.
// Через 5 секунд замість неї має бути показано друге зображення.
// Ще через 5 секунд – третя.
// Ще за 5 секунд - четверта.
// Після того, як з'являться всі картинки - цей цикл має розпочатися наново.
// При запуску програми десь на екрані з'явиться кнопка з написом Stop.
// Після натискання на кнопку Stop цикл завершується, на екрані залишається показаною та картинка,
//      яка була там при натисканні кнопки.
// Поруч із кнопкою Stop має бути кнопка Restart показ,
//      при натисканні якої цикл продовжується з тієї картинки, яка в даний момент показана на екрані.
// Розмітку можна змінювати, додавати потрібні класи, ID, атрибути, теги.

