const Logger=require('./logger')
const logger=new Logger();
logger.on('message',(data)=>{
    console.log("Event Fired",data)
})
console.log(logger.log("Hello"))
console.log(logger.log("Hi"))
console.log(logger.log("good Luck"))
console.log(logger.log("All the best"))