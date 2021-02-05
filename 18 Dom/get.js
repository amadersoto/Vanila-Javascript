let btn = document.getElementById('btn')
let posts = document.getElementById('posts')

let URL = 'http://jsonplaceholder.typicode.com/users'

btn.addEventListener('click', function () {
  fetch(URL)
    .then(Response => Response.json())
    .then(data => {
      console.log(data)
    })
    .catch(e => console.log(e.message))
})