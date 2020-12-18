//define assigneeclass 
class Assignee{
 constructor(name ,title,status){
 this.name= name
 this.title= title
 this.status= status
 }
 static alpha = 'xyz'
	
 static lol(value){
		console.log('employee  '+value+'  should be consistance and passionate with their work')
	}
 ChangeStatus(value){
 this.status= value
 }
}
// creating objects with assignee class
var hamza= new Assignee('Hamza khan','finance Manager','active')
var musab= new Assignee('Musab khan','machanical Engineer','active')
var Ali= new Assignee('ali khan','marketing Manager','active')
var Mustafain = new Assignee('Mustafain khan','web designer','fresher')
var owais= new Assignee('Owais khan',' graphic Designer','active')
console.log(Assignee.alpha)
Assignee.lol('mahnoor');

module.exports= Assignee
