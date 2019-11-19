function onReady() {
  const addToDoForm = document.getElementbyId('addToDoForm');
  const newToDoText = document.getElementbyId('newToDoText');
  const toDoList = document.getElementbyId('toDoList');


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    //  create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });
}

function deleteListItems() {
  const deleteButton = document.getElementbyId('addDeleteButton');

  deleteButton.addEventListener('submit', event => {
    event.preventDefault();

    for (var i = 0; i < deleteButton.length; i++) {
      deleteButton[i].addEventListener('submit', deleteListItems);
    }
  })

}

window.onload = function() {
  onReady();
};
