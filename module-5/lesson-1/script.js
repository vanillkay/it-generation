// 1.
// const call = {
//     caller: "mom",
//     says: function() {
//         console.log(`Hey, ${this.caller} just called.`);
//     }
// };

// call.says();


//-----------------


//-----------------


// 2.
// console.log(undefined.caller)

// const writeHello = function() {console.log(`Hello ${this.caller}`)}

// const call = {
//     caller: "mom",
//     says: writeHello
// }

// call.says()


//-----------------


// 3. Э функція, викличте її в правильному контексті

function showFullName() {
    console.log("Inside", this);
    alert( this.firstName + " " + this.lastName );
}

    const person = {
        firstName:"Mango",
        lastName:"Poly",
        // showFullName
    }





    // person.showFullName = showFullName;
    // person.showFullName();

    //   const fn = showFullName.bind(person);
    //   fn();
    // showFullName.call(person, 2, 3, 4,);

    // showFullName.apply(person);

//-----------------

// 4. Виправте функцію, що втрачає "this"

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "1") {
//         ok();
//     }else {
//         fail();
//     }
// }

// const user = {
//     name: 'Вася',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//-----------------

// 5. Що потрібно передати у виклик функції askPassword у коді нижче, щоб вона могла викликати
// функцію user.login(true) як ok та функцію user.login(false) як fail?

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") {
        ok() // user.login(true)
    } else {
        fail() // user.login(false)
    };
}

let user = {
    name: 'John',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

// const success = () => user.login(true);
// const fail = () => user.login(false);


// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

//-----------------

// 6. Є функція sum, яка підсумовує всі елементи масиву:

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
}

console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)

// Створіть аналогічну функцію sumArgs(), яка підсумовуватиме всі свої аргументи:
// Для вирішення застосуйте метод reduce до arguments, використовуючи spread, call, apply або "позичення методу".

function sumArgs() {
    // arguments.reduce = [].reduce;
    // console.log('Reduce function -> ', [].reduce)
    // return arguments.reduce((acc, value) => { return acc + value }, 0);


    // return [].reduce.call(arguments, (acc, value) => { return acc + value }, 0);
    const getSum = [].reduce.bind(arguments, (acc, value) => { return acc + value }, 0);
    return getSum();
}

console.log( sumArgs(1, 2, 3, 6) );

//-----------------
