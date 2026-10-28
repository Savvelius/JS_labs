const list = document.getElementById('myList')

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove()
    }
});