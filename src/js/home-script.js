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

document.querySelectorAll('.game-figure').forEach((element) => {
  element.addEventListener('click', (event) => {
    window.location.href = './jogo.html'
  })
})

document.querySelectorAll('.categories').forEach((element) => {
  const originalImage = element.getAttribute('data-image')
  if (originalImage) {
    element.style.backgroundImage = `url('${originalImage}')`
  }
})

document.querySelectorAll('.categories').forEach((category) => {
  category.addEventListener('mousemove', (event) => {
    const rect = category.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const percentX = (mouseX / rect.width) * 100
    const percentY = (mouseY / rect.height) * 100
    category.style.backgroundPosition = `${percentX}% ${percentY}%`
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  function handleResize() {
    if (window.innerWidth < 768) { // Define o tamanho da tela (exemplo: 768px)
      dropdownToggle.removeAttribute('data-bs-toggle'); // Remove o comportamento do dropdown
      dropdownToggle.classList.remove('dropdown-toggle'); // Remove a classe visual
    } else {
      dropdownToggle.setAttribute('data-bs-toggle', 'dropdown'); // Restaura o comportamento do dropdown
      dropdownToggle.classList.add('dropdown-toggle'); // Restaura a classe visual
    }
  }

  // Chama a função ao carregar a página e ao redimensionar
  handleResize();
  window.addEventListener('resize', handleResize);
});