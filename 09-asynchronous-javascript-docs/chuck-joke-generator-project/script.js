const jokeBtn = document.getElementById('joke-btn');
const jokeEl = document.getElementById('joke');

function generateJoke() {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            jokeEl.innerHTML = JSON.parse(this.responseText).value;
        }
    }
    
    xhr.send();   
}

jokeBtn.addEventListener('click', generateJoke);

//loads right away
document.addEventListener('DOMContentLoaded', generateJoke);