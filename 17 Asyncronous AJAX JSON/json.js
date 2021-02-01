function get(url, callback) {
  const a = new XMLHttpRequest()
  a.open('get', url)
  a.onreadystatechange = (e) => {
    if (a.readyState == 4) {
      if (a.status == 200) {
        let res = JSON.parse(a.response)
        callback(null, res)
      } else {
        callback(a.status, null)
      }
    }
  }
  a.send()
}

get('http://jsonplaceholder.typicode.com/users', (err, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(response)
  }
})

get('http://jsonplaceholder.typicode.com/posts', (err, response) => {
  if (err) {
    console.log(err)
  } else {
    response.forEach(r => console.log(r.title))
  }
})