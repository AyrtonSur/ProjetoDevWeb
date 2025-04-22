document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.submit-button')
  const progressBar = document.querySelector('.progress-bar')
  const modal = new bootstrap.Modal(document.getElementById('loginProgressModal'))

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    modal.show()

    progressBar.style.width = '0%'
    progressBar.setAttribute('aria-valuenow', '0')

    // Simula o progresso do login
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      progressBar.style.width = `${progress}%`
      progressBar.setAttribute('aria-valuenow', progress)

      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          modal.hide()

          // Salva a mensagem no localStorage
          localStorage.setItem('loginSuccessMessage', 'Login realizado com sucesso!')

          // Redireciona para a página index.html
          window.location.href = 'index.html'
        }, 500)
      }
    }, 300)
  })

  const loginModal = document.getElementById('loginProgressModal');


  loginModal.addEventListener('hide.bs.modal', (event) => {
    event.preventDefault()
  })
})