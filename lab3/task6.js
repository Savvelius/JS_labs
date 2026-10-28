const images = document.querySelectorAll('img')

images.forEach(img => {
    img.alt = 'Изображение';
});

images[0].src = 'https://img.magnific.com/free-photo/beautiful-sunset-lake-with-greenery-coast-amazing-cloudy-sky_181624-3746.jpg'