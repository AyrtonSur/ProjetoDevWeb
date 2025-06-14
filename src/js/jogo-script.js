
    const previewImage = document.getElementById('carousel-preview');

    const carousel = document.getElementById('carouselExample');
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
    function updatePreviewImage() {
        const activeItem = carousel.querySelector('.carousel-item.active'); 
        const activeImage = activeItem.querySelector('img'); 
        if (activeImage) {
            
            if (activeImage) {
                // Substitui o tamanho no link por outro (ex: 1920x1080)
                const highResSrc = activeImage.src.replace(/(\d+)x(\d+)/, '600x338');
                previewImage.src = highResSrc;
            }
            
        }
    }

    updatePreviewImage();

    carousel.addEventListener('slid.bs.carousel', updatePreviewImage);
