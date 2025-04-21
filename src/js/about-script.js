document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.about-video video')

  if (video) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          video.pause()
          video.currentTime = 0
        } else {
          video.play()
        }
      })
    })

    observer.observe(video)
  }

  const scrollToLink = document.querySelector('.scroll-to');

  if (scrollToLink) {
    scrollToLink.addEventListener('click', (event) => {
      event.preventDefault()

      const targetId = scrollToLink.getAttribute('href')
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (targetElement.offsetHeight / 2)
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 200
        let start = null
      
        function animationStep(timestamp) {
          if (!start) start = timestamp
          const progress = timestamp - start
          const ease = progress / duration
          const scrollAmount = startPosition + distance * ease
      
          window.scrollTo(0, scrollAmount);
      
          if (progress < duration) {
            requestAnimationFrame(animationStep)
          } else {
            window.scrollTo(0, targetPosition)
          }
        }
      
        requestAnimationFrame(animationStep)
      }
    })
  }

  const gameImages = document.querySelectorAll('.game_image');

  gameImages.forEach((gameImage) => {
    const relativespeed = parseFloat(gameImage.getAttribute('data-rellax-speed')) || 1
    const offset = relativespeed * 20

    gameImage.style.transform = `translateY(${offset}px)`

    window.addEventListener('scroll', () => {
      const scrollOffset = window.scrollY * 0.15
      gameImage.style.transform = `translateY(${offset + scrollOffset}px)`
    })
  })
})

document.addEventListener('visibilitychange', () => {
  const video = document.querySelector('.about-video video')
  if (video) {
    if (document.hidden) {
      video.pause()
      video.currentTime = 0
    } else {
      video.play()
    }
  }
})