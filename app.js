function onReady() {
  let toDos = [];

  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');


  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the text
    let title = NEW_TODO_TEXT.value;

    toDos.push(title);

    // create a new li
    let newLi = document.createElement('li');

    //  create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event) {
      let buttonLiText = this.parentElement.childNodes[0].textContent;

      TODO_LIST.removeChild(this.parentElement);

      toDos.forEach(function(currentToDo, index){
        if(currentToDo === buttonLiText){
          toDos.splice(index, 1);
        }
      });
    })



    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    // attach the li to the ul
    TODO_LIST.appendChild(newLi);

    // empty the input
    NEW_TODO_TEXT.value = "";

  });

};

window.onload = function() {
  onReady();
};
