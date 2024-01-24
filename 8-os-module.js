const os= require('os')
const data=os.userInfo()
console.log(data)
console.log(`the current uptime is ${os.uptime()}`)
const currentOS  ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}
console.log(currentOS)
