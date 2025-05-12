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
  element.addEventListener('click', () => {
    //vai no elemento geral "game-specs" e pega o elemento "game-title"
    const gameSpecs = element.closest('.game-specs');
    const gameTitle = gameSpecs.querySelector('.game-title');

    if (gameTitle) {
      //pega o texto do h3 do "game-title" separa a plavara e pega so a primeira e adiciona .html
      const fullTitle = gameTitle.textContent;
      const firstWord = fullTitle.split(' ')[0]; 
      const fileName = firstWord.toLowerCase().replace(/[^a-z0-9\-]/g, '') + '.html'; 
      window.location.href = `./src/${fileName}`;
    }
  });
});

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

  // Verifica se há uma mensagem no localStorage
  const message = localStorage.getItem('loginSuccessMessage')

  if (message) {
    // Cria o alerta do Bootstrap
    const alertContainer = document.createElement('div')
    alertContainer.className = 'alert login-success alert-success alert-dismissible fade show'
    alertContainer.role = 'alert'
    alertContainer.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    `

    // Insere o alerta no topo da página
    const mainContent = document.querySelector('main') // Ajuste o seletor conforme necessário
    if (mainContent) {
      mainContent.prepend(alertContainer)
    }

    // Remove a mensagem do localStorage para que não apareça novamente
    localStorage.removeItem('loginSuccessMessage')
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown')
  const dropdownToggle = document.querySelector('.dropdown-toggle')

  function handleResize() {
    if (window.innerWidth < 768) {
      dropdownToggle.removeAttribute('data-bs-toggle')
      dropdownToggle.classList.remove('dropdown-toggle')
    } else {
      dropdownToggle.setAttribute('data-bs-toggle', 'dropdown')
      dropdownToggle.classList.add('dropdown-toggle')
    }
  }

  handleResize()
  window.addEventListener('resize', handleResize)
})

const menuModalLabel = document.getElementById('menuModalLabel')

if (menuModalLabel) {
  menuModalLabel.addEventListener('click', () => {
    window.location.href = './login.html'
  })
}