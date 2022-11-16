// delete - move up - move down:

const list = document.querySelector('ul');


list.addEventListener('click',(event)=>{
  if(event.target.className == 'click delete'){
    const li = event.target.parentNode;
    list.removeChild(li);
  }else if(event.target.className == 'click arrowUp'){
    const task = event.target.parentElement;
    const previousTask = task.previousElementSibling;
    
    if(previousTask){
      list.insertBefore(task,previousTask);
    }
  }else if(event.target.className == 'click arrowDown'){
    const li = event.target.parentElement;
    const nextLi = li.nextElementSibling;
    if(nextLi){
      list.insertBefore(nextLi,li);
    }
    
  }
})

// add task to the TODOLISt:

const addTaskForm = document.forms['form1'];



addTaskForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  const value = addTaskForm.querySelector('.getText').value;

  // create Elements:
  const addList = document.createElement('li');
  const taskName = document.createElement('span');
  const arrowUp = document.createElement('span');
  const arrowDown = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // insert Elements :
  taskName.textContent = value;
  addList.appendChild(taskName);
  addList.appendChild(arrowUp);
  addList.appendChild(arrowDown);
  addList.appendChild(deleteBtn);
  list.appendChild(addList);

   // add classes:
  taskName.classList.add('value');
  arrowUp.classList.add('click','arrowUp');
  arrowDown.classList.add('click','arrowDown');
  deleteBtn.classList.add('click','delete');
  
})



// some functions to add elements:
// function creatElements(){
 
  
  
 
// }




//  function insertElements (){
   
  
  

// //}


//  function addClass(){
   
//  }