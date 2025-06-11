document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.screenshot-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.close-button');

    // Función para abrir el lightbox
    function openLightbox(imageSrc, imageAlt) {
        lightbox.style.display = 'flex'; // Muestra el lightbox
        lightboxImg.src = imageSrc; // Establece la fuente de la imagen grande
        lightboxCaption.textContent = imageAlt; // Establece el texto de la descripción
        document.body.style.overflow = 'hidden'; // Evita el scroll en el body
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.style.display = 'none'; // Oculta el lightbox
        lightboxImg.src = ''; // Limpia la fuente de la imagen
        lightboxCaption.textContent = ''; // Limpia el texto de la descripción
        document.body.style.overflow = ''; // Habilita el scroll nuevamente
    }

    // Añadir event listener a cada imagen de la galería
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            openLightbox(image.src, image.alt);
        });
    });

    // Añadir event listener al botón de cerrar
    closeButton.addEventListener('click', closeLightbox);

    // Cerrar el lightbox al hacer clic fuera de la imagen (en el overlay)
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) { // Si el clic fue directamente en el fondo del lightbox
            closeLightbox();
        }
    });

    // Cerrar el lightbox al presionar la tecla 'Escape'
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
});