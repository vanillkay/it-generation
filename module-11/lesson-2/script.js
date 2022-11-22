// https://jsonplaceholder.typicode.com

// _limit: 20

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
// console.log(axios)
const inputUserToDo = document.createElement('input');
document.body.append(inputUserToDo);
const createToDoBtn = document.createElement('button');
createToDoBtn.textContent = 'Create ToDo';
document.body.append(createToDoBtn);


const listEl = document.createElement('ul');
document.body.append(listEl);
let pageNumber = 1;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos'



const buttonEl = document.createElement('button');
buttonEl.textContent = 'Download Todos';
buttonEl.addEventListener('click', onLoadTodo);
document.body.append(buttonEl);

const getTodos = async () => { 

  // const searchParams = new URLSearchParams({
  //   _limit: 40,
  //   _page: pageNumber,
  // })

    // const response = await fetch(`${BASE_URL}?${searchParams}`)
    // return response.json();

      return await axios.get('/', {
          params: {
            _limit: 40,
            _page: pageNumber,
          }
        });
       
}

async function onLoadTodo() {
  buttonEl.disabled = true;
  if (pageNumber === 1) {
    buttonEl.textContent = 'Load more';
  }

  
  try { 
    const { data:todoArray } = await getTodos() 
    console.log(todoArray)
    if (todoArray.length === 0) {
      buttonEl.style.display = 'none';
      Notiflix.Notify.failure('Nothing to load')
      throw new Error("Limit error");
    }
    renderMarkup(todoArray);
} catch(err) {
    console.log(err);
} finally {
      pageNumber += 1;
      buttonEl.disabled = false;
}
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
  console.log("Sync")
}

async function onDelete({ target }) {
  // if (target.tagName !== 'BUTTON') {
  //   return;
  // }

  const liElement = target.closest('li')

  if(!liElement){
    return;
  }
  target.disabled = true;

  const todoId = liElement.dataset.id
  try{ await onToDoDelete(todoId)
    liElement.remove();
  }catch(erro) {
  console.log(erro)
  }
  finally { 
    target.disabled = false;
  };
}

async function onToDoUpdate(id, completed, target) {
  target.disabled = true;
  console.log('In async');
  try{
    await axios.patch(id, {
      completed
    })

    // await fetch(`${BASE_URL}/${id}`, {
    // method: 'PATCH',
    // body: JSON.stringify({
    //   completed,
    // }),
    // headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    // }})
  }finally{
    target.disabled = false
console.log('async')
  }
}


async function onToDoDelete(id) {
  return await axios.delete(id)
  // return await fetch(`${BASE_URL}/${id}`, {
  //    method: 'DELETE',
  // })
}


// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },

async function createToDoFetch (title) { 
 return await axios.post('/', {
  userId: 1, 
  title, 
  completed: false
})

  // const data = await fetch(`${BASE_URL}`, {
  //   method: 'POST',
  //   body: JSON.stringify({userId: 1, title, completed: false}),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   }
  // }) 
  // return data.json();
}

async function onClickCreateToDo (event) {
  const value = inputUserToDo.value.trim();

  if(!value) {
    Notiflix.Notify.failure('Enter the title, please');
    return;
  }

  event.target.disabled = true;

    try{ const res =  await createToDoFetch(value);
      renderMarkup([res.data], 'afterbegin')
      Notiflix.Notify.success('ToDo was added!');
    } finally {
      event.target.disabled = false;
      inputUserToDo.value = '';
    }
}

createToDoBtn.addEventListener('click', onClickCreateToDo)
  



