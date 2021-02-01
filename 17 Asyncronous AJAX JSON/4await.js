function myPromise() {
  return Promise.resolve('i am promise')
}
console.log(myPromise())

async function test() {
  return 'test'
}
test().then(r => alert(r))

let p1 = Promise.resolve('i am promise')

function pro() {
  p1.then(r => alert(r))
}
pro()

let p2 = new Promise(resolve => {
  setTimeout(resolve, 3000, 'selim')
})
async function prom() {
  let v = await p2
  console.log(v)
}
prom()

async function fech() {
  let res = await fetch('http://jsonplaceholder.typicode.com/users')
  let data = await res.json()
  let name = data.map(n => n.name)
  console.log(name)
}
fech()