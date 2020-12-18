var Assignee = require('./Assignee.js')
// console.log(Assignee)
// define tasks class
class tasks extends Assignee{
    constructor(asd,tname,days,taskstatus){
        super(asd);
        this.asd = asd
    this.tname = tname
     this.tdays = days
     
     this.taskstatus= taskstatus
     }
     ChangeTaskStatus(value){
        
     this.taskstatus= value
     }
    }
    // creating objects with tasks class
    var hamza= new Assignee('Hamza khan','finance Manager','active')
    var musab= new Assignee('Musab khan','machanical Engineer','active')
var Ali= new Assignee('ali khan','marketing Manager','active')
var Mustafain = new Assignee('Mustafain khan','web designer','fresher')
var owais= new Assignee('Owais khan',' graphic Designer','active')


    var task1 = new tasks(hamza,'architecture',5,'inprogress')
    var task2 = new tasks(musab,'development_1',10,'notstarted')
    var task3 = new tasks(Ali,'development_2',4,'done')
    var task4 = new tasks(Mustafain,'development_3',15,'inprogress')
    // creating map for multiple tasks
    var blockchain_task = new Map();
    blockchain_task.set('1',task1);
    blockchain_task.set('2',task2);
    blockchain_task.set('3',task3);
    blockchain_task.set('4',task4);
    console.log(blockchain_task)

    module.exports= tasks