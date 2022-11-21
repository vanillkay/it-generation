// https://jsonplaceholder.typicode.com

// _limit: 20

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
const inputUserToDo = document.createElement('input');
document.body.append(inputUserToDo);
const createToDoBtn = document.createElement('button');
createToDoBtn.textContent = 'Create ToDo';
document.body.append(createToDoBtn);


const listEl = document.createElement('ul');
document.body.append(listEl);
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
let pageNumber = 1;



const buttonEl = document.createElement('button');
buttonEl.textContent = 'Download Todos';
buttonEl.addEventListener('click', onLoadTodo);
document.body.append(buttonEl);

const getTodos = () => { 
  const searchParams = new URLSearchParams({
    _limit: 40,
    _page: pageNumber,
  })

    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => response.json())
}

function onLoadTodo() {
  buttonEl.disabled = true;
  if (pageNumber === 1) {
    buttonEl.textContent = 'Load more';
  }

  getTodos()
  .then(todoArray => {
    if (todoArray.length === 0) {
      buttonEl.style.display = 'none';
      Notiflix.Notify.failure('Nothing to load')
      throw new Error("Limit error");
    }
    return todoArray;
  })
    .then(renderMarkup)
    .catch(console.info)
    .finally(() => {
      pageNumber += 1;
      buttonEl.disabled = false;
    });
}

function renderMarkup(todosArray, position = 'beforeend') {


    const markupList = todosArray.map(({ id, completed, title }) => {
      return `<li data-id = ${id}>
          <p>${title}</p>
          <input type="checkbox" ${completed ? 'checked' : ''}>
          <button type="button">Delete Todo</button>
      </li>`
    }).join('');

    listEl.insertAdjacentHTML(position, markupList);
    
}

// listEl.addEventListener('click', onChecked);
// listEl.addEventListener('click', onDelete);

listEl.addEventListener('click', onTodoInteract)



function onTodoInteract({target}){
  const todoInteractOperations = new Map([
    [target.tagName === 'INPUT', onChecked],
    [target.tagName === 'BUTTON', onDelete],
    [target.tagName === 'P', onTitleClick]
  ])

  // {
  //   true: onChecked,
  //   false: onDelete,
  //   false: onTitleClick
  // }

  const operation = todoInteractOperations.get(true);

  if(!operation){
    return;
  }

  operation({ target })
  
  // if (target.tagName === 'INPUT') {
  //   onChecked({ target })
  // }

  // if (target.tagName === 'BUTTON') {
  //   onDelete({ target });
  // }
}

function onTitleClick({target}){
  window.navigator.clipboard.writeText(target.textContent);
}

function onChecked({ target }) {
  // if (target.tagName !== 'INPUT') {
  //   return;
  // }

  const liElement = target.closest('li')

  if(!liElement){
    return;
  }

  const todoId = liElement.dataset.id
  const todoComleted = target.checked
  onToDoUpdate(todoId, todoComleted, target)
  target.disabled = true;
}

function onDelete({ target }) {
  // if (target.tagName !== 'BUTTON') {
  //   return;
  // }

  const liElement = target.closest('li')

  if(!liElement){
    return;
  }
  target.disabled = true;

  const todoId = liElement.dataset.id
  onToDoDelete(todoId).then(() => {
    liElement.remove();
  }).catch(erro => console.log('Soory no internet')).finally(() => {
    target.disabled = false;
  });
}

function onToDoUpdate(id, completed, target) {
  fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      completed,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
  }).finally(() => target.disabled = false)
}


function onToDoDelete(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
}


// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },

function createToDoFetch (title) {
 return fetch(`${BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify({userId: 1, title, completed: false}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(data => data.json())
}

function onClickCreateToDo (event) {
  const value = inputUserToDo.value.trim();

  if(!value) {
    Notiflix.Notify.failure('Enter the title, please');
    return;
  }

  event.target.disabled = true;

  createToDoFetch(value)
    .then(res => {
      renderMarkup([res], 'afterbegin')
      Notiflix.Notify.success('ToDo was added!');
    })
    .finally(() => {
      event.target.disabled = false;
      inputUserToDo.value = '';
    })
}

createToDoBtn.addEventListener('click', onClickCreateToDo)
  



