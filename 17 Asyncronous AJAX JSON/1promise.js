const a = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'selim')
})

a.then((v) => {
  console.log(v)
})

function iphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve('I got I phone')
      } else {
        reject(new Error('this is reject'))
      }
    }, 1000)
  })
}

iphone(true)
  .then((res) => {
    console.log(res)
  })
  .catch((rej) => {
    console.log(rej.message)
  })