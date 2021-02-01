const BASE_URL = 'http://jsonplaceholder.typicode.com/'

// promise

fetch(`${BASE_URL}/users/1`)
  .then(res => res.json())
  .then(d => {
    console.log(d)
    return Promise.resolve('another promise')
  })
  .then(v => {
    console.log(v)
  })
  .catch(e => console.log(e))

// same output by the own function

function getRequest(url) {
  return new Promise((resolve, reject) => {
    const a = new XMLHttpRequest()

    a.open('get', url)

    a.onreadystatechange = function (e) {
      if (a.readyState == 4) {
        if (a.status == 200) {
          let response = JSON.parse(a.response)
          resolve(response)
        } else {
          reject(new Error('Error Occurred'))
        }
      }
    }
    a.send()
  })
}
getRequest(`${BASE_URL}/users/1`)
  .then(data => {
    console.log(data)
  })
  .catch(e => {
    console.log(e.message)
  })