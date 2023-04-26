//Отправка формы
const form = document.querySelector('.form__fields');
const formSuccess = document.querySelector('.form__success');
const formInputs = document.querySelector('.form__inputs');
const inputs = document.querySelectorAll('.form__input');
const formButton = document.querySelector('.form__button');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let filledInputs = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            inputs[i].classList.add('blank');
        } else {
            filledInputs += 1;
        }
    }
    if (filledInputs === inputs.length) {
        const data = new FormData(this) // Сборка формы
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: data // Отправка самой формы
        })
            .then(response => {
                if (response.ok) {
                    formInputs.classList.add('hide');
                    formSuccess.classList.remove('hide');
                }
            })
            .catch(err => console.log(err));
    } else {
        if (!document.querySelector('.form__error')) {
            const error = document.createElement('div');
            error.className = 'form__error';
            error.innerHTML = 'Error message example'
            formButton.before(error)
        }
    }
})
