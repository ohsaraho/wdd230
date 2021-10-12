const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    let favChapter = input.value;
    input.value = '';
    
    const listChapter = document.createElement('li');
    const listUserInput = document.createElement('span');
    const listBtn = document.createElement('button');



    listChapter.appendChild(listUserInput);
    listUserInput.textContent = favChapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(listChapter);

    listBtn.addEventListener('click', function(e) {
        list.removeChild(listChapter);
    });

    input.focus();


});