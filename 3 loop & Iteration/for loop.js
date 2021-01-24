for (var i = 0; i < 10; i++){
  console.log(i)
}


for (var i = 1; i <= 10; i++){
  if (i % 2 == 0) {
    console.log('even number is :'+i)
  } else {
    console.log('odd number is :'+ i)
  }
}

// to sumission

var sum = 0
for (var i = 1; i <= 10; i++){
  console.log(sum + '+' + i + '=' +(sum+i))
  sum += i
}
console.log('result :'+sum)
