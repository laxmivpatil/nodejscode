const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'files')
const filePath=dirPath+"/fruit.txt"


//fs.writeFileSync(filePath,"this is a file")

//read
/*
fs.readFile(filePath,'utf-8',(err,files)=>{
    console.log(files)
})

fs.appendFile(filePath,"file name is",(err)=>{
    if(!err)
    console.log('file updated')
})


fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err)
    console.log('rename success')
})

console.log('dghfhdgf')
*/
fs.unlinkSync(filePath,(err)=>{
    if(!err)
    console.log('file delete')
})

