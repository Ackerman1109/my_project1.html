// Функция для обновления при наведении или фокусе
function upDate(previewPic) {
    console.log("Событие сработало для:", previewPic.alt);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

// Функция для возврата исходного состояния
function unDo() {
    document.getElementById("image").innerHTML = "Наведите курсор или используйте клавишу Tab для просмотра изображений";
    document.getElementById("image").style.backgroundImage = "url('')";
}

// Функция для инициализации галереи при загрузке страницы
function initGallery() {
    console.log("Страница загружена, добавляем tabindex");
    varI = document;
    let images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); // Добавляем tabindex для каждого изображения
    }
}