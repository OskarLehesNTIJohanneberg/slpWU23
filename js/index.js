const input = document.getElementById("name-input").addEventListener("click", changeColor());

function changeColor() {
    input.classList.toggle('active')
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message Sent!');
});