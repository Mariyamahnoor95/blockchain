var Assignee = require('./Assignee.js')

// define tasks class
class tasks extends Assignee{
    constructor(tname,tdays,AssigneeId,taskstatus){
        super();
        
    this.tname = tname
     this.tdays = tdays
     
     this.taskstatus= taskstatus
     this.AssigneeId= AssigneeId
     }
    changeTaskStatus(value) {
        console.log('\nTask status changed to: ' + (this.taskstatus = value ))
    }
    salary(){
        console.log(" Assignee salary")
         return super.AssigneePay()     
     }
    taskPercentage(tadays,compdays){
        var per = tadays/compdays * 100;
        return per;
    }
    }
    
    module.exports= tasks