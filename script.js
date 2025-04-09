function upDate(previewPic) {
    // Проверка, что событие срабатывает
    console.log("Событие наведения сработало");

    // Вывод информации о previewPic
    console.log("Alt изображения:", previewPic.alt);
    console.log("Источник изображения:", previewPic.src);

    // Изменение текста элемента с id="image"
    document.getElementById("image").innerHTML = previewPic.alt;

    // Изменение фонового изображения элемента с id="image"
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Возврат исходного текста
    document.getElementById("image").innerHTML = "Наведите курсор на изображение ниже, чтобы отобразить его здесь";

    // Возврат исходного фонового изображения
    document.getElementById("image").style.backgroundImage = "url('')";
}