let input = document.querySelector('.input-task');
let addbtn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addbtn.classList.add('active')
    } else{
        addbtn.classList.remove('active')
    }
})

addbtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p>${input.value} </p>
                <div class="item-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        tasks.appendChild(newItem);
        input.value = '';

    } else {
        alert('please enter a task')
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})