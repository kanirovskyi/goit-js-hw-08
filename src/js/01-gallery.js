// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const imagesContainer = document.querySelector(".gallery");

// функция создания карточки картинка в галерее
function createImage(images) {
    const imageItem = images.map(({ preview, original, description }) => `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
   `).join("");
    
    imagesContainer.insertAdjacentHTML("beforeend", imageItem);
}

//рендерится разметка
createImage(galleryItems);

// Инициализация plugin lightbox и добавление параметров
const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});
