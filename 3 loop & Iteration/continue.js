// to escap any index we will use continue
for (var i = 1; i <= 10; i++){
  if (i == 3 || i == 7) { // 3 and 7 will escap
    continue
  } else {
    console.log(i)
  }
}