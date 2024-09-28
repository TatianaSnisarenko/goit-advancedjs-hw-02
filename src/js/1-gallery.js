import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/styles.css';
import { images } from './data/gallery-images';

const gallery = document.querySelector('.gallery');
const nav = document.querySelector('nav');

const createGalleryMarkup = images =>
  images
    .map(
      (image, index) => `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      data-index="${index}"
      alt="${image.description}"
    />
  </a>
</li>
`
    )
    .join('');

gallery.innerHTML = createGalleryMarkup(images);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

galleryLightbox.on('show.simplelightbox', function () {
  nav.classList.add('hidden');
});

galleryLightbox.on('close.simplelightbox', function () {
  nav.classList.remove('hidden');
});
