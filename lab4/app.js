const addForm = document.getElementById('addForm')
const formTitle = document.getElementById('formTitle')
const submitBtn = document.getElementById('submitBtn')
const output = document.getElementById('addOutput')
const adList = document.getElementById('adList')

const nameInput = document.getElementById('addName')
const descInput = document.getElementById('addDesc')
const priceInput = document.getElementById('addPrice')
const imgInput = document.getElementById('addImg')

let editingCard = null

addForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = nameInput.value.trim()
    const desc = descInput.value.trim()
    const price = priceInput.value.trim()
    const file = imgInput.files[0]

    if (name === '' || desc === '' || price === '') {
        output.textContent = 'Ошибка: заполните название, описание и цену'
        output.style.color = 'red'
        return
    }

    if (editingCard !== null) {
        editingCard.querySelector('.ad-name').textContent = name
        editingCard.querySelector('.ad-desc').textContent = desc
        editingCard.querySelector('.ad-price').textContent = price

        if (file) {
            const imgElem = editingCard.querySelector('.ad-img')
            imgElem.src = URL.createObjectURL(file)
            imgElem.classList.remove('d-none')
        }

        editingCard = null
        formTitle.textContent = 'Добавление объявления'
        submitBtn.textContent = 'Добавить'
        output.textContent = 'Объявление успешно изменено'
        output.style.color = 'green'
        addForm.reset()
        return
    }

    const card = document.createElement('div')
    card.className = 'card p-3 mb-3'

    const imgUrl = file ? URL.createObjectURL(file) : ''

    card.innerHTML = `
        <img class="ad-img mb-2 ${imgUrl ? '' : 'd-none'}" src="${imgUrl}" alt="Изображение" style="max-height: 200px; width: fit-content; object-fit: cover;">
        <h5 class="ad-name mb-1"></h5>
        <p class="ad-desc mb-1"></p>
        <p class="fw-bold mb-2">Цена: <span class="ad-price"></span> ₽</p>
        <div>
            <button type="button" class="btn btn-warning btn-sm me-2 edit-btn">Редактировать</button>
            <button type="button" class="btn btn-danger btn-sm delete-btn">Удалить</button>
        </div>
    `

    card.querySelector('.ad-name').textContent = name
    card.querySelector('.ad-desc').textContent = desc
    card.querySelector('.ad-price').textContent = price

    card.querySelector('.delete-btn').addEventListener('click', () => {
        if (editingCard === card) {
            editingCard = null
            formTitle.textContent = 'Добавление объявления'
            submitBtn.textContent = 'Добавить'
            addForm.reset()
        }
        card.remove()
    })

    card.querySelector('.edit-btn').addEventListener('click', () => {
        editingCard = card
        nameInput.value = card.querySelector('.ad-name').textContent
        descInput.value = card.querySelector('.ad-desc').textContent
        priceInput.value = card.querySelector('.ad-price').textContent
        imgInput.value = ''

        formTitle.textContent = 'Редактирование объявления'
        submitBtn.textContent = 'Сохранить'
        output.textContent = ''
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    adList.appendChild(card)
    output.textContent = 'Новое объявление успешно добавлено'
    output.style.color = 'green'
    addForm.reset()
})