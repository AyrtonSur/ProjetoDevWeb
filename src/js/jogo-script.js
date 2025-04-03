
    const previewImage = document.getElementById('carousel-preview');

    const carousel = document.getElementById('carouselExample');

    function updatePreviewImage() {
        const activeItem = carousel.querySelector('.carousel-item.active'); 
        const activeImage = activeItem.querySelector('img'); 
        if (activeImage) {
            if (activeImage.src.endsWith("imagem1Menor.jpg")) {
                previewImage.src = "assets/imagem_maior.jpg";
            } else if (activeImage.src.endsWith("imagemMenor.jpg")) {
                previewImage.src = "assets/imagem_maior2.jpg";
            }
        }
    }

    updatePreviewImage();

    carousel.addEventListener('slid.bs.carousel', updatePreviewImage);
