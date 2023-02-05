let todos = [{
    title: 'Get groceries',
    dueDate: '2021-10-04',
    id: 'id1'
  }, {
    title: 'Wash car',
    dueDate: '2021-02-03',
    id: 'id2'
  }, {
    title: 'Make dinner',
    dueDate: '2021-03-04',
    id: 'id3'
  }];

  render();

  function addTodo() {
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    const id = '' + new Date().getTime();
 
    todos.push({
      title: title,
      dueDate: dueDate,
      id: id
    });

    render();
  }

 

  function deleteTodo(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id;

    todos = todos.filter(function (todo) {
      // If the id of this todo matches idToDelete, return false
      // For everything else, return true
      if (todo.id === idToDelete) {
        return false;
      } else {
        return true;
      }
    });

    render();
  }

  function render() {
    // reset our list
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo) {
      const element = document.createElement('div');
      element.innerText = todo.title + ' ' + todo.dueDate;
      element.style = 'margin-top:10px;'
    
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.style = 'margin-left: 12px';
      deleteButton.onclick = deleteTodo;
      deleteButton.id = todo.id;
      element.appendChild(deleteButton);

      const todoList = document.getElementById('todo-list');
      todoList.appendChild(element);
    });
  }

  function hypo(){
    const aValue = Number(document.getElementById('a-side').value);
    const bValue = Number(document.getElementById('b-side').value);

    let hypothenus = Math.sqrt(Math.pow(aValue,2)+ Math.pow(bValue,2));
    const sumBox = document.getElementById('output');
    sumBox.innerText = hypothenus;
  }
  let count = 0;
  function decrease(){
    count -=1;
    document.getElementById('counter-label').innerText = count;
  }
  function reset(){
    count = 0;
    document.getElementById('counter-label').innerText = count;
  }
  function increase(){
    count += 1;
    document.getElementById('counter-label').innerText = count;
  }
  let num = 0;
  function roll(){
   num = Math.floor(Math.random() * 6) + 1;
    document.getElementById('randNum').innerText = num;
  }
