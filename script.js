function upDate(previewPic) {
    console.log("Событие сработало для:", previewPic.alt);
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").innerHTML = "Наведите курсор или используйте клавишу Tab для просмотра изображений";
    document.getElementById("image").style.backgroundImage = "url('')";
}

function initGallery() {
    console.log("Страница загружена, добавляем tabindex");
    varI = document;
    let images = document.querySelectorAll(".gallery img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); 
    }
}
