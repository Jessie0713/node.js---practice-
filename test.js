console.log(global)
setTimeout(() => {
  console.log('Unless provide me a great environment to work')
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.log('Give Back My Money')
}, 1000)
console.log(__filename)
console.log(__dirname)

const names = 'hi'
module.exports = { names }
