
class student {
    constructor(id, name, Fname, Class, section, monthlyfees, admissionfees,talent) {
        this.id = id;
        this.name = name;
        this.Fname = Fname;
        this.Class = Class;
        this.section = section;
        this.monthlyfees = monthlyfees;
        this.admissionfees = admissionfees;
        this.talent= talent
    }

     get talent_() {
        console.log(`${this.name} expert in ${this.talent}.`);
    }
    set talent_(value) {
      this.talent = value
    }
    printData() {
        console.log("\n*************** STUDENT DATA ***************")
        console.log("\n**ROLL NO:" + this.id + "*")
        console.log("\n**NAME:" + this.name + "*")
        console.log("\n** FATHER NAME:" + this.Fname + "*")
        console.log("\n**Class:" + this.Class + "*")
        console.log("\n**SECTION:" + this.section + "*")
        console.log("\n**MONTHLY FEE:" + this.monthlyfees + "*")
        console.log("\n**ADMISSION FEE:" + this.admissionfees + "*")
        console.log("\n***************STUDENT DATA ***************\n")
    }
    
}

class student_marksheet extends student {
    constructor(id, name, Fname, Class, section, monthlyfees, admissionfees) {
        super(id, name, Fname, Class, section, monthlyfees, admissionfees); // call the super class constructor and pass in the name param
        this._maths;
        this._physics;
        this._chemistry;
        this._english;
        this._urdu;
        this.obtainedMark;
        this.totalMarks;
        this.percent;
    }
    get maths() {
        return this._maths;
    }
    set maths(value) {
        this._maths = value;
    }
    set physics(value) {
        this._physics = value
    }
    get physics() {
        return this._physics
    }
    set chemistry(value) {
        this._chemistry = value
    }
    get chemistry() {
        return this._chemistry
    }
    set english(value) {
        this._english = value
    }
    get english() {
        return this._english
    }
    set urdu(value) {
        this._urdu = value
    }
    get urdu() {
        return this._urdu
    }
    percentage() {
        this.obtainedMark = this._chemistry + this._english + this._maths + this._urdu + this._physics;
        this.totalMarks = 400;
        this.percent = (this.obtainedMark / this.totalMarks) * 100
        console.log("Total percentage is " + this.percent)
    }
    printmarks() {
        console.log("\n*************** REPORT CARD ***************")
        console.log("\n**NAME:" + this.name + "*")
        console.log("\n**ROLL NO:" + this.id + "*")
        console.log("\nGrand Obtained Marks: ", this.obtainedMark)
        console.log("Grand Total Marks: ", this.totalMarks)
        console.log("Final Percentage is: ", this.percent, "\n")
        if (this.percent > 80) {
            console.log("A-1 GRADE")
        }
        else if (this.percent <= 80 && this.percent >= 70) {
            console.log("A GRADE ")
        }
        else if (this.percent < 70) {
            console.log("B GRADE")
        }
        else {
            console.log("C GRADE")
        }
        console.log("\n*************** REPORT CARD ***************\n")
    }
   
}
var mahnoor= new student_marksheet(1,"mahnoor","Hameed ullah",16,"B",100000,54322,)
mahnoor.printData()
mahnoor.maths=98
mahnoor.physics=45
mahnoor.chemistry=34
mahnoor.english=76
mahnoor.urdu=34
console.log(mahnoor)
mahnoor.percentage()
mahnoor.printmarks()
var ali= new student_marksheet(2,"ali","Hameed ",6,"B",1340000,322,)
ali.printData()
ali.maths=98
ali.physics=45
ali.chemistry=34
ali.english=76
ali.urdu=34
ali.percentage()
ali.printData()
var owais= new student_marksheet(3,"owais","Hameed ",14,"B",90000,4322,)
owais.printData()
owais.maths=98
owais.physics=45
owais.chemistry=34
owais.english=76
owais.urdu=34
owais.percentage()
owais.printData()


var Class1= new Set;
Class1.add(mahnoor)
console.table(Class1)
console.log(Class1)
Class1.add(ali)
console.log(Class1)
console.log(Class1.has(mahnoor))
console.log(Class1.has(5))
console.log(Class1.has("mahnoor"))

Class1.add(owais)
console.log(Class1)
console.log(Class1.size)





