//Отправка формы
const form = document.querySelector('.form__fields');
const formSuccess = document.querySelector('.form__success');
const formInputs = document.querySelector('.form__inputs');

form.addEventListener('submit', function(e) {
    e.preventDefault();
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
})
