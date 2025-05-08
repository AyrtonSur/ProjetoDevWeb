document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.submit-button')
  const progressBar = document.querySelector('.progress-bar')
  const modal = new bootstrap.Modal(document.getElementById('loginProgressModal'))

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Obter os valores dos campos de entrada
    const usernameInput = document.getElementById('inputUsername');
    const passwordInput = document.getElementById('inputPassword');
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Limpar mensagens de erro anteriores
    usernameInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    let hasError = false;

    // Verificar se o campo username está preenchido
    if (!username || username.length < 5) {
      usernameInput.classList.add('is-invalid');
      document.getElementById('usernameError').textContent = 'Por favor, insira um nome de usuário válido.';
      hasError = true;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?`~]{8,}$/

    if (!password) {
      passwordInput.classList.add('is-invalid');
      document.getElementById('passwordError').textContent = 'Por favor, insira uma senha.';
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      passwordInput.classList.add('is-invalid');
      document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';
      hasError = true;
    }

    // Interrompe o fluxo se houver erros
    if (hasError) {
      return;
    }

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
          window.location.href = '../index.html'
        }, 500)
      }
    }, 300)
  })

  const loginModal = document.getElementById('loginProgressModal');


  loginModal.addEventListener('hide.bs.modal', (event) => {
    event.preventDefault()
  })
})