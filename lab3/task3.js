const button = document.getElementById('myButton')

button.addEventListener('click', () => {
    console.log('Кнопка нажата!')
    button.remove()
})