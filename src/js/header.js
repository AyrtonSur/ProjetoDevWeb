const menuModalLabel = document.getElementById('menuModalLabel')

if (menuModalLabel) {
  menuModalLabel.addEventListener('click', () => {
    window.location.href = './login.html'
  })
}

