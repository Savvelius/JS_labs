const addForm = document.getElementById('addForm')

addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const addInput = document.getElementById('addInput')
    const adText = addInput.value.trim()
    const output = document.getElementById('addOutput')
    
    if (adText !== '') {
        const ol = document.getElementById("adList")
        const li = document.createElement("li")
        li.textContent = adText
        ol.appendChild(li)
        output.textContent = 'Новое объявление успешно добавлено'
        output.style.color = 'green'
        addForm.reset()
    } else {
        output.textContent = 'Ошибка'
        output.style.color = 'red'
    }
})

const editForm = document.getElementById('editForm')

editForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const idElem = document.getElementById('editInputId')
    const id = Number(idElem.value)
    const textElem = document.getElementById('editInputText')
    const text = textElem.value.trim()
    const outputId = document.getElementById('editOutputId')
    const outputText = document.getElementById('editOutputText')
    
    outputText.textContent = ''
    outputId.textContent = ''

    const adList = document.querySelectorAll('#adList li')


    isError = false
    if (text === '') {
        isError = true
        outputText.textContent = 'Введён пустой текст'
        outputText.style.color = 'red'
    }
    if (id <= 0 || id > adList.length) {
        isError = true
        outputId.textContent = 'Введённый несуществующий id'
    }

    if (!isError) {
        adList[id - 1].textContent = text

        outputText.textContent = 'Объявление успешно изменено'
        outputText.style.color = 'green'
        outputId.textContent = ''
    }
})

const deleteForm = document.getElementById('deleteForm')

deleteForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const idElem = document.getElementById('deleteInput')
    const id = Number(idElem.value)
    const output = document.getElementById('deleteOutput')

    const adList = document.querySelectorAll('#adList li')
    
    if (id <= 0 || id > adList.length) {
        output.textContent = 'Введённый несуществующий id'
        output.style.color = 'red'
    } else {
        adList[id - 1].remove()
        output.textContent = 'Объявление успешно удалено'
        output.style.color = 'green'
    }
})