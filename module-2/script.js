// 1. Напишіть скрипт порівняння елементів двох масивів. Виводь у консоль true якщо вони ідентичні,
// та false якщо ні ( довжина обох массивів однакова )
// 1 = 1, at position 1
// 6 != 5, at position 4

// const arr1 = [1,2,1,6];
// const arr2 = [1,2,3,5];
// arrayCheck(arr1, arr2);

function arrayCheck(arr1, arr2) {
    for(let i = 0; i < arr1.length; i+=1) {
        if(arr1[i] === arr2[i]) {
            console.log(`${arr1[i]} = ${arr2[i]}, at position ${i + 1}`);
            // continue;
        }
        else {
            console.log(`${arr1[i]} != ${arr2[i]}, at position ${i + 1}`);
        }
    }
}


// --------------------

// 2. Написати функцію яка буде видаляти з масиву елемент та виводити масив після видалення в консоль.
// Якщо такого елемента в масиві немає – виводь у консоль помилку
// Функція приймає два аргументи – сам масив та елемент на видалення

const arr = [1,2,3,4,5,6,7]
const elementToRemove = 10;

const deleteElementFunction = (array, deleteElement) => {

const deleteElementIndex = array.indexOf(deleteElement);

if (deleteElementIndex === -1) {
  return null;
}

array.splice(deleteElementIndex, 1);
return array;
}

// console.log(deleteElementFunction(arr, elementToRemove))

//--------------------

// 3. Напишіть функцію, яка створює масив елементів, що є сумою відповідних елементів заданих масивів.
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

// Результат має бути таким масивом – [5,7,9,4,5]

//--------------------

const addElements = function (array1, array2) { 
    const newArray = [];
    for (let i = 0; i < array1.length; i += 1) { 
        newArray.push(array1[i] + array2[i]);
        
    }
    return newArray;
}

// console.log(addElements(arr1, arr2));




// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само, як уперед, назад, наприклад, level.

function isPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');

    return (word === reversedWord);

}



// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
// console.log(isPalindrome('що')); // false
// console.log(isPalindrome('that'));  // false

//------------------------

// 5. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.

// function squareDigits(num) {
//   const str = num.toString();
//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     const count = Number(str[i]) ** 2;
//     result += count.toString();
//   }
//   return Number(result);
// }


// function squareDigits2(number){
//     return number
//         .toString()
//         .split("")
//         .map(item => Number(item) ** 2)
//         .join('')
        
// }

    // console.log(typeof squareDigits(91)); // 811
    // console.log(squareDigits2(0)); // 0
    // console.log(squareDigits2(867)); // 643649


//------------------------

// 6. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done

function stringTransformer(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i += 1) {
        const symbol = str[i];
        if (symbol === symbol.toLowerCase()) {
            newStr += symbol.toUpperCase();
        }else if (symbol === symbol.toUpperCase()) {
            newStr += symbol.toLowerCase();
        }
    }
    return newStr.split(' ').reverse().join(' ');
}



console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT

