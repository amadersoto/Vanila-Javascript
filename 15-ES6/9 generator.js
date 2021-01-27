let arr = [1, 2, 3]
let obj = {
  start: 1,
  end: 5,
  // [Symbol.iterator]: function () {
  //   let currentValue = this.start
  //   const self = this
  //   return {
  //     next() {
  //       return {
  //         done: currentValue > self.end,
  //         value: currentValue > self.end ? undefined : currentValue++
  //       }
  //     }
  //   }
  // }

  // we can write it like this >

  [Symbol.iterator]:function* (){
    let currentValue = this.start
    while (currentValue <= this.end) {
      yield currentValue++
    }
  }
}

let iterat = obj[Symbol.iterator]()
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())
console.log(iterat.next())

// with for loop

function* gen(collection) {
  for (let i = 0; i <= collection.length; i++){
    yield collection[i]
  }
}

let it = gen(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())