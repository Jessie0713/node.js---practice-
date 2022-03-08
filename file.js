const fs = require('fs')
//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// }) //非同步

//writing files
fs.writeFile('./docs/blog1.txt', 'hello ', (err) => {
  if (err) {
    console.log(err)
  }
  fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(data.toString())
  })
})

//創造檔案
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created')
  })
} else {
  fs.rmdir('./assets', (err) => {
    //資料夾
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}
//刪檔案 fs.unlink()
if (fs.existsSync('./docs/deleteFile.txt')) {
  fs.unlink('./docs/deleteFile.txt', (err) => {
    console.log(err)
  })
  console.log('file deleted')
}
