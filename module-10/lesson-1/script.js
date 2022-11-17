// https://jsonplaceholder.typicode.com

// _limit: 20

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },



const listEl = document.createElement('ul');
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
const searchParams = new URLSearchParams({
  _limit: 10
})

const getTodos = () => { 
    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => response.json())
}

getTodos().then(toDoArr => {

  const markupList = toDoArr.map(({ id, completed, title }) => {
    
    return `<li data-id = ${id}>
        <p>${title}</p>
        <input type="checkbox" ${completed ? 'checked' : ''}>
    </li>`
  }).join('');

  listEl.innerHTML = markupList;
  document.body.append(listEl);
    
})

listEl.addEventListener('click', onChecked)

function onChecked({ target }) {
  if (target.tagName !== 'INPUT') {
    return;
  }

  const liElement = target.closest('li')

  if(!liElement){
    return;
  }

  const todoId = liElement.dataset.id
  const todoComleted = target.checked
  onToDoUpdate(todoId, todoComleted, target)
  target.disabled = true;
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



