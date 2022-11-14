import voca from 'voca';
const throttle = require('lodash.throttle');


const inputField = document.querySelector('.form__field');
const buttonsWrap = document.querySelector('.controls');

inputField.addEventListener('input', throttle( () => {
    localStorage.setItem('user-input', inputField.value)
}, 500))

function setInput () {
   const inputSaved = localStorage.getItem('user-input');
    if (inputSaved) {
        inputField.value = inputSaved;
    }
}
setInput();

buttonsWrap.addEventListener('click', (event) => {
    const { value } = inputField;
    const { target } = event;
    const neededCase = target.dataset.name;
    


    if(target.tagName === 'SPAN' && target.textContent.length > 0){
        window.navigator.clipboard.writeText(target.textContent);
        return;
    }


    if (!neededCase) {
        return;
    }

    if(!(neededCase in voca)){
        alert('Wrond method !!')
        return
    }
    
    const result = target.nextElementSibling;


    // console.log(voca[neededCase]?.())

    result.textContent = voca[neededCase](value)

    // result.textContent = transform(neededCase, value);

    // switch (neededCase) {
    //     case 'camel':
    //         result.textContent = voca.camelCase(value);
    //         break;
    //     case 'kebab':
    //         result.textContent = voca.kebabCase(value);
    //         break;
    //     case 'snake':
    //         result.textContent = voca.snakeCase(value);
    //         break;
    //     case 'swap':
    //         result.textContent = voca.swapCase(value);
    //         break;
    //     case 'upper':
    //         result.textContent = voca.upperCase(value);
    //         break;
    //     case 'lower':
    //         result.textContent = voca.lowerCase(value);
    //         break;
    // }
})


export function transform(neededCase, value){
    switch (neededCase) {
        case 'camel':
            return voca.camelCase(value);
        case 'kebab':
            return  voca.kebabCase(value);
        case 'snake':
             return voca.snakeCase(value);
        case 'swap':
            return voca.swapCase(value);;
        case 'upper':
            return voca.upperCase(value);
        case 'lower':
             return voca.lowerCase(value);
        default: return "Error, not valid case"
    }
}




