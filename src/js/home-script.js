document.querySelectorAll('.game-scenes').forEach((element) => {
  const imageUrl = element.getAttribute('data-image')
  element.style.backgroundImage = `url('${imageUrl}')`
})