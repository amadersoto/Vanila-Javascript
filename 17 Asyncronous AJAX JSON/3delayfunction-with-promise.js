const delay = second => new Promise(resolve => setTimeout(resolve, second * 1000))
delay(5).then(() => console.log('5 second delay'))

// resolve

let a = Promise.resolve('resolved')
a.then(v => console.log(v))

// reject

let b = Promise.reject('reject')
b.catch(e => console.log(e))