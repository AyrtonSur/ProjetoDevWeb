document.querySelectorAll('.game-scenes').forEach((element) => {
  const imageUrl = element.getAttribute('data-image')
  const targetId = element.getAttribute('data-target')
  element.style.backgroundImage = `url('${imageUrl}')`

  element.addEventListener('mouseover', function () {
    const gameFigure = document.querySelector(`.game-figure[data-figure-id="${targetId}"]`)
    if (gameFigure) {
      gameFigure.style.backgroundImage = `url('${imageUrl}')`
    }
  })

  element.addEventListener('mouseout', function () {
    const gameFigure = document.querySelector(`.game-figure[data-figure-id="${targetId}"]`)
    if (gameFigure) {
      const originalImage = gameFigure.getAttribute('data-original-image')
      gameFigure.style.backgroundImage = `url('${originalImage}')`
    }
  })
})

document.querySelectorAll('.game-figure').forEach((element) => {
  const originalImage = element.getAttribute('data-original-image')
  if (originalImage) {
    element.style.backgroundImage = `url('${originalImage}')`
  }
})

document.querySelectorAll('.game-gif').forEach((element) => {
  const staticUrl = element.getAttribute('data-static')

  element.style.backgroundImage = `url('${staticUrl}')`
})

document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})
