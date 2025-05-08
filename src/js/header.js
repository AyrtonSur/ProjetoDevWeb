const menuModalLabel = document.getElementById('menuModalLabel')

console.log(menuModalLabel)
if (menuModalLabel) {
  menuModalLabel.addEventListener('click', () => {
    window.location.href = '/src/login.html'
  })
}

