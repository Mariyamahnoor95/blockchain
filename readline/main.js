var Assignee = require('./Assignee.js')
var tasks = require('./task.js')
var project = require('./project.js')
var http = require('http')

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)
// creating objects with assignee class
var hamza= new Assignee('Hamza khan','finance Manager','active')
var musab= new Assignee('Musab khan','machanical Engineer','active')
var Ali= new Assignee('ali khan','marketing Manager','active')
var Mustafain = new Assignee('Mustafain khan','web designer','fresher')
var owais= new Assignee('Owais khan',' graphic Designer','active')
console.log("Assignee Detail ")
console.log(owais)
// creating objects with tasks class
var task1 = new tasks('architecture',5,hamza,'inprogress')
var task2 = new tasks('development_1',10,Ali,'notstarted')
var task3 = new tasks('development_2',4,musab,'done')
var task4 = new tasks('development_3',15,owais,'inprogress')

// creating map for multiple tasks
var blockchain_task = new Map();
blockchain_task.set('1',task1);
blockchain_task.set('2',task2);
blockchain_task.set('3',task3);
blockchain_task.set('4',task4);
var realstate_blockchain = new project('blockchain','software',15,blockchain_task,'50')
array1 = ['asd', 'sad', 543574]
obj1 = {
	name: 'Mustafa',
	id: 78567
}
obj2 = obj1.toString()
http.createServer(function(req,res){
	if(req.url == '/'){
		console.log(req.url)
		
		res.write('<h1>Nodejs --------- Project</h1>' )
		res.write( realstate_blockchain.name+"\n" )
		res.write( JSON.stringify(realstate_blockchain)+"\n" )
		res.write( realstate_blockchain.type+"\n" )
		res.write( realstate_blockchain.days.toString()+"\n" )
		res.write( realstate_blockchain.dayscompleted.toString()+"\n" )
		
		res.write( obj1.name )
		res.end()
	}else if(req.url == '/task2'){
		res.write('<p>Welcome To Post</p>')
		res.write(realstate_blockchain.getTaskPercentage('2').toString()+"\n" )
		res.write(realstate_blockchain.getTaskPercentage('3').toString()+"\n" )
		res.write(realstate_blockchain.getTaskPercentage('1').toString()+"\n" )
		res.write(realstate_blockchain.getTaskPercentage('4').toString()+"\n" )
		res.end()
	}else{
		var data = {'text':'asdasds'}
		var d = 1;
		

		res.writeHead(200,{'contentType':'application/json'})
		res.write( realstate_blockchain.AssigneePay()+"\n" )
		res.write(d.toString())
		res.end()
	}
	
}).listen(90)






realstate_blockchain.projectDetails()
console.log(realstate_blockchain.getTaskPercentage('2'))
console.log(realstate_blockchain.TaskAssigneee('1'))






realstate_blockchain.projectDetails()
console.log(realstate_blockchain.getTaskPercentage('2'))
console.log(realstate_blockchain.TaskAssigneee('1'))
