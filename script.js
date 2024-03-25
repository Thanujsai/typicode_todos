const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=5')//returns a promise
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                console.log(`element is`)
                console.log(element)
                
                // document.querySelector('#todo-list').append(element.title);
                // document.querySelector('#todo-list').append(document.createElement('br'));
                addToDotoDOM(element);

            });
            console.log(data)
        })
}

const addToDotoDOM = (element) => {
    const div = document.createElement('div');
                div.appendChild(document.createTextNode(element.title));
                div.setAttribute('data-id',element.id);

                if(element.completed){
                    console.log(`completed element`)
                    console.log(element)
                    div.classList.add('done');
                }
                document.getElementById('todo-list').appendChild(div)
};

const createTodo = (e) => {
    e.preventDefault();
    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl,{
        method:'POST',
        body:JSON.stringify(newTodo),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(data => addToDotoDOM(data))
    console.log(`in create to do, the value typed in form is ${e.target.firstElementChild.value}`);//we get whatever we type in the text field
}

const toggleCompleted = (e) => {
    e.target.classList.toggle('done');
}
const init = () => {
    document.addEventListener('DOMContentLoaded',getTodos);
    document.querySelector('#todo-form').addEventListener('submit',createTodo);
    document.querySelector('#todo-list').addEventListener('click',toggleCompleted);
}

init();