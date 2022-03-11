const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

btn.addEventListener('click', ()=>{
   
    const item = document.createElement('li');
    item.innerText = inputField.value 
    if (inputField.value.length === 0) {
        return false;
        };
        /*inputField.value.length === 0 - если длинна значение в поле input равно 0. то есть не заполнено
    return false; - не применяй функцию, не добавляй элемент.*/
    item.classList.add('toDoAdded');
    list.appendChild(item);
  
    inputField.value = '';
    
    item.addEventListener('click', ()=>{
        item.classList.add('action');
    })

    item. addEventListener('dblclick', ()=>{
        list.removeChild(item);
    })
})