// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"

const galleryRef = document.querySelector(".gallery");

const galleryMurkup = galleryCreateMurkup(galleryItems);

function galleryCreateMurkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", galleryMurkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionPosition: "bottom",
  captionsData: "alt",
  captionDelay: "250",
});
// Change code below this line

console.log(galleryItems);
