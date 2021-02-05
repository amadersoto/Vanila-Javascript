let nam = document.getElementById('name')

nam.addEventListener('keypress', function (e) {
  if (e.key == 'Enter') {
    document.getElementById('showName').innerHTML = `your name is : ${e.target.value}`
    e.target.value = ''
  }
})