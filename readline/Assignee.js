//define assigneeclass 
class Assignee{
 constructor(name ,title,status){
 this.name= name
 this.title= title
 this.status= status
 this.Assigneepay='50000pkr'
 }
 static alpha = 'xyz'
    
 
 static lol(){
		console.log('assignee should be consistant and passionate')
    }
    
    ChangeStatus(value){
      this.status= value
      return this.status
  }
  AssigneePay(){
      return this.Assigneepay
  }
  AssigneeDetails(){
      console.log("name :"+this.name)
      console.log("title :"+this.title)
      console.log("status "+this.status)

  }
}

// Assignee.lol()
module.exports= Assignee
