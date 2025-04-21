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