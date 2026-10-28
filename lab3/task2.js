const elements = document.querySelectorAll('.highlight')

elements.forEach(element => {
    element.style.backgroundColor = 'yellow'
    element.style.fontSize = '20px'
    element.textContent = 'Отмечен'
})