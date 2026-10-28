const form = document.getElementById('myForm')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()

    if (name === '' || email === '') {
        message.textContent = 'Ошибка: заполните все поля'
        message.style.color = 'red'
    } else {
        message.textContent = 'Форма успешно отправлена'
        message.style.color = 'green'
        form.reset()
    }
})