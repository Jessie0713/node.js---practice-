const { people, name } = require('./people') //require 很像 import ， 可以解構賦值變數
console.log(name)
const os = require('os') // 其中一種可用的module for operating sysytem
console.log(os.homedir(), os.platform())
