var tasks = require('./task.js')
// define project class
class project extends tasks{
    constructor(pname,type,pdays,tasks,dayscompleted,name ,title,status,tname,days,taskstatus){
        super(name ,title,status,tname,days,taskstatus)
     this.tasks = tasks
     this.status="in progress";
     this.days = pdays
     this.name=pname
     this.type = type
     this.dayscompleted = dayscompleted
    }
    print(){
    return this.tasks
    }
    totaltasks(){
    return this.tasks.size
     }
     daysRemaining(){
     var remainingday=this.dayscompleted-this.days
     return remainingday
    
     }
     status_(){
     var i=0;
     var j=0;
     var k=0;
     for (let [key, value] of this.tasks.entries()) {
    
    
     if(value.taskstatus =="done"){
    
     console.log(key + ' = ' + value.taskstatus)
     i+=1;
    
     }
    
     else if(value.taskstatus =="inprogress"){
    
     console.log(key + ' = ' + value.taskstatus)
     j+=1;
    
     }
     else{
    
     console.log(key + ' = ' + value.taskstatus)
     k+=1;
    
     }
    
    
     }
     console.log(`Completed task ${i}`)
     console.log(`Inprogress task ${j}`)
     console.log(`Not started task ${k}`)
     if(i==this.tasks.size){
     console.log("project completed")
     }
     else if(i < this.tasks.size){
     console.log("Project is inprogress")
     }
     else if(k == this.tasks.size){
     console.log("project not started")
     }
     else{
     console.log("not define")
     }
    
     }
     CompletedTasks(){
     console.log("Completed task")
     for (let [key, value] of this.tasks.entries()) {
     if(value.taskstatus =="done"){
    
     console.log(key + ' = ' + value.taskstatus)
     }
    
     }
     console.log('\n---------------')
     }
     PendingTasks(){
     console.log("Pending task")
     for (let [key, value] of this.tasks.entries()) {
    
     if(value.taskstatus!="done"){
    
     console.log(key + ' = ' + value.taskstatus)
     }
    
     }
     console.log('\n---------------')
    
     }
     TaskAssigneee(taskid) {
     }
    changeTask(taskid,task){
     this.tasks.set(taskid,task)
    console.log(this.tasks.get(taskid,task))
     }
     DeleteTask(value){
     this.tasks.delete(value)
     }
     AddTask(key,value){
     this.tasks.set(key,value)
     }
     ChangeAssignee(taskid,value){
     this.tasks.get(taskid).AssigneeId= value;
     }
    }
    var task1 = new tasks('Hamza khan','finance Manager','active','architecture',5,'inprogress')
    var task2 = new tasks('Musab khan','machanical Engineer','active','development_1',10,'notstarted')
    var task3 = new tasks('ali khan','marketing Manager','active','development_2',4,'done')
    var task4 = new tasks('Mustafain khan','web designer','fresher','development_3',15,'inprogress')
    // creating map for multiple tasks
    var blockchain_task = new Map();
    blockchain_task.set('1',task1);
    blockchain_task.set('2',task2);
    blockchain_task.set('3',task3);
    blockchain_task.set('4',task4);
    

    var realstate_blockchain = new project('blockchain','software',15,blockchain_task,'50')

console.log(realstate_blockchain.totaltasks())
    console.log("-------------------------------------change task")
  
    console.log(realstate_blockchain)
    

     module.exports= project