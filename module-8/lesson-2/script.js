import lsMethods from './storage.js'
// light - 'theme-light'
// dark - 'theme-dark'

const THEME_KEY = "themKey";
const checkBox = document.querySelector('#slider');

checkBox.addEventListener('change', onBoxChange);

function onBoxChange(event) {
    const {target} = event;
    console.log('check', target.checked)
    // if(target.checked) {
    //     document.body.className = 'theme-dark';
    // }else {
    //     document.body.className = 'theme-light';
    // }
    const localVariable = target.checked ? 'theme-dark' : 'theme-light';
    document.body.className = localVariable;
    lsMethods.save(THEME_KEY, localVariable);
}

// function themSet() {
//     const savedTheme = lsMethods.load(THEME_KEY);
//     if(savedTheme !== undefined && savedTheme === "theme-dark") {
//         checkBox.checked = true;
//         document.body.className = savedTheme;
//     }
// }

// themSet();


// const savedTheme = lsMethods.load(THEME_KEY);
// if(savedTheme !== undefined && savedTheme === "theme-dark") {
//     checkBox.checked = true;
//     document.body.className = savedTheme;
// }


(function(){
    const savedTheme = lsMethods.load(THEME_KEY);
    if(savedTheme !== undefined && savedTheme === "theme-dark") {
        checkBox.checked = true;
        document.body.className = savedTheme;
    }
})()


//IIFE
// Immediately invoked function expression


// lsMethods.save("key", "value");

// console.log(lsMethods.load("key"));

// lsMethods.remove("key");