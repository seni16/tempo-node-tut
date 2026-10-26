const path=require('path')
console.log(path.sep)

const filePath=path.join('/subfolder','content','test.txt')
console.log(filePath)

const base=path.basename(filePath)
cosole.log(base)