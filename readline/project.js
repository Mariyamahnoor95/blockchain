var tasks = require('./task.js')
// define project  class
class project extends tasks {
    constructor(name, type, days, tasks, dayscompleted) {
        super();
        this.tasks = tasks
        this.status = "in progress";
        this.days = days
        this.name = name
        this.type = type
        this.dayscompleted = dayscompleted

    }
    projectDetails() {
        console.log("Name :" + this.name)
        console.log("Type: " + this.type)
        console.log("completed Days " + this.days)
        console.log("total Days " + this.dayscompleted)
        console.log(super.salary())
    }
    getTaskPercentage(taskid) {
        var task = this.tasks.get(taskid);
        var taskDays = task.tdays;
        var per = super.taskPercentage(taskDays, this.dayscompleted);
        return 'The Percentage of ' + task.tname + ' is : ' + per;
    }
    print() {
        return this.tasks
    }
    totaltasks() {
        return this.tasks.size
    }
    daysRemaining() {
        var remainingday = this.dayscompleted - this.days
        return remainingday


    }
    status_() {
        var i = 0;
        var j = 0;
        var k = 0;
        for (let [key, value] of this.tasks.entries()) {


            if (value.taskstatus == "done") {
                console.log(key + ' = ' + value.taskstatus)
                i += 1;

            }

            else if (value.taskstatus == "inprogress") {
                console.log(key + ' = ' + value.taskstatus)
                j += 1;

            }
            else {
                console.log(key + ' = ' + value.taskstatus)
                k += 1;

            }


        }
        console.log(`Completed task ${i}`)
        console.log(`Inprogress task ${j}`)
        console.log(`Not started task ${k}`)
        if (i == this.tasks.size) {
            console.log("project completed")

        }
        else if (i < this.tasks.size) {
            console.log("Project  is inprogress")

        }
        else if (k == this.tasks.size) {
            console.log("project not started")

        }
        else {
            console.log("not define")
        }

    }
    CompletedTasks() {
        console.log("Completed task")
        for (let [key, value] of this.tasks.entries()) {
            if (value.taskstatus == "done") {

                console.log(key + ' = ' + value.taskstatus)
            }

        }
        console.log('\n---------------')


    }
    PendingTasks() {
        console.log("Pending task")
        for (let [key, value] of this.tasks.entries()) {

            if (value.taskstatus != "done") {

                console.log(key + ' = ' + value.taskstatus)
            }

        }
        console.log('\n---------------')


    }
    TaskAssigneee(taskid) {
        var task = this.tasks.get(taskid);
        var taskSAssignee = task.AssigneeId;
        taskSAssignee.AssigneeDetails()
        return 'The above  Detail of Assignee of this task  ' + task.tname + '  : ';

    }
    changeTask(taskid, task) {
        this.tasks.set(taskid, task)
        console.log(this.tasks.get(taskid, task))
    }
    DeleteTask(value) {
        this.tasks.delete(value)

    }
    AddTask(key, value) {
        this.tasks.set(key, value)

    }
    ChangeAssignee(taskid, value) {
        this.tasks.get(taskid).AssigneeId = value;


    }
}


module.exports = project