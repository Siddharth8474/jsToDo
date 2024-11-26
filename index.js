document.addEventListener('DOMContentLoaded',()=>{
    let InputValue = document.getElementById('input')
    let list = document.getElementById('list')
    let addBtn = document.getElementById('btn')
    let SearchInput = document.querySelector('.search-input')

    let editList = null


    addBtn.addEventListener('click', function(){
        let inputValue = InputValue.value

        if(inputValue === '') return

        if(addBtn.innerText === 'Update'){
           editList.querySelector('.task-test').textContent = inputValue
           editList = null;
           addBtn.innerText = 'ADD'
           InputValue.value = ''
        }
        else{
            //creat list
            let li = document.createElement('li')
            li.className='task-item'

            //creating Radio Button
            let radioButton = document.createElement('input')
            radioButton.type='radio'
            radioButton.name='task'
            radioButton.className='task-radio'

            //create tasktest
            let taskTest = document.createElement('span')
            taskTest.className = 'task-test'
            taskTest.textContent = inputValue


            radioButton.addEventListener('click',function(){
                if (taskTest.style.textDecoration === 'line-through') {
                    taskTest.style.textDecoration = 'none';
                    taskTest.style.color = '#000';
                } else {
                    taskTest.style.textDecoration = 'line-through';
                    taskTest.style.color = '#aaa';
                }
            })


             //Delete Button
            let DltButton = document.createElement("button")
            DltButton.innerText='Delete'
            DltButton.className='deleteBtn'
            DltButton.style.display = 'none'

            DltButton.addEventListener('click',function(event){
               list.removeChild(event.target.closest('li'))
            })

            //create edit button
            let editButton = document.createElement('button')
            // editButton.className='editButton'
            editButton.textContent='Edit'
            editButton.style.display = 'none'

            editButton.addEventListener('click', function(event){
            //    InputValue.value = taskTest.textContent
            //    addBtn.innerText = 'Update'
            //    editList=li
                 if(editButton.textContent === 'Edit'){
                    let inpitbox = document.createElement('input')
                         inpitbox.type = 'text'
                         inpitbox.value = taskTest.textContent
                         inpitbox.className='editvalue'

                         li.replaceChild(inpitbox,taskTest)

                         editButton.textContent = 'save'
                 }
                 else if(editButton.textContent === 'save'){
                    let inputBox = li.querySelector('.editvalue')
                    let newValue = inputBox.value
                      
                    if(newValue === ''){
                        alert('task can not be empty')
                        return;
                    }

                    taskTest.textContent = newValue

                    li.replaceChild(taskTest,inputBox)

                    editButton.textContent = 'Edit'
                 }
            })

            let dotsButton = document.createElement('button');
            dotsButton.className = 'dots-Btn';
            dotsButton.innerHTML = '⋮';

            dotsButton.addEventListener('click', function () {
                if (DltButton.style.display === 'none' && editButton.style.display === 'none') {
                    DltButton.style.display = 'block';
                    editButton.style.display = 'block';
                } else {
                    DltButton.style.display = 'none';
                    editButton.style.display = 'none';
                }
            });

           li.append(radioButton,taskTest,DltButton,editButton,dotsButton)
           list.append(li)
        }
        InputValue.value = ''
    })


    // Search items
    SearchInput.addEventListener('input',function(){
        let query = SearchInput.value.toLowerCase()
        let items = document.querySelectorAll('.task-item')

        items.forEach(item =>{
            let taskText = item.querySelector('.task-test').textContent.toLowerCase()
            if(taskText.includes(query)){
                item.style.display = ''
            }
            else{
                item.style.display = 'none'
            }
        })
    })
})