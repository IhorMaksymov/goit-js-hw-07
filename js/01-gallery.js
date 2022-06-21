import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
}


const galleryElement = galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                    class="gallery__image"
                    src='${preview}'
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
                </div>`;
}).join('');


function galleryElementOriginal(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    };
    event.preventDefault();
    const splash = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    splash.show();
    console.log(1)
    document.addEventListener('keydown', escPress)
        
    function escPress(event) {
        if (event.code === 'Escape') { 
            splash.close();
            document.removeEventListener('keydown', escPress);
            console.log(2)
        }
    }   
}

refs.gallery.addEventListener('click', galleryElementOriginal);

refs.gallery.insertAdjacentHTML('beforeend', galleryElement);


console.log(galleryItems);
