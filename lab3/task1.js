const title = document.getElementById('title')
title.textContent = 'Добро пожаловать на мой сайт!'

const content = document.getElementById('content')
const paragraph = document.createElement('p')
paragraph.textContent = 'Этот сайт создан на JavaScript'
content.appendChild(paragraph)