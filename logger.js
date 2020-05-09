const EventEmmiter=require('events');
const uuid=require('uuid')
class logger extends EventEmmiter{
    log(msg){
      this.emit('message',{id:uuid.v4(),msg})
    }
}
module.exports=logger