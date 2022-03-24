function addingEventListener() {
    input.addEventListener('click',onClickAlert);
}

function onClickAlert() {
    alert('I was clicked!');
}

const input = document.getElementById('input');

input.addEventListener('click',onClickAlert);
