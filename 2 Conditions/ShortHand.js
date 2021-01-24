var a = '' // এখানে ভ্যালু দিলে এইটাই রিটার্ন করবে
var b = ''
if (a.length == 0) {
  b = 'i am b'
} else {
  b = a
}
console.log(b)

// উপরের কন্ডিশন্টা এভাবেও লেখা যায়
var b = a || 'i am b'
console.log(b)

var d = true
d && console.log('d is true') // যদি d সত্য হয় তাহলেই রান হবে ।
