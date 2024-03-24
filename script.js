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


getTodos();