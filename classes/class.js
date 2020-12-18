const { exit } = require('process')
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

function choose(){
 rl.question("Enter\n1 for Addition\n2 for Subtraction\n3 for multiplication\n4 for division\n5 for square root\n6 for cuberoot\n7 for power\n8 for exponent\n9 for log\n10 for sin\n11 forcos\n12 for tan\n13 for inverse sin\n14 for inverse cos\n15 for inverse tan\n\n",
function(choice){
 if(choice==1){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.addition(a,b))
 further()

        })
        
    })
 }
 else if(choice==2){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.subtraction(a,b))
            further()
        })
        
    })
 }
 else if(choice==3){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.multiply(a,b))
            further()
        })
        
    })
 }
 else if(choice==4){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.division(a,b))
            further()
        })
        
    })
 }
 else if(choice==5){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.sqroot(a,b))
            further()
        })
        
    })
 }
 else if(choice==6){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.cbroot(a,b))
            further()
        })
        
    })

 }
 else if(choice==7){
    rl.question("Enter a Number ",function(a){
        rl.question("Enter a another Number ",function(b){
            a=parseInt(a)
            b=parseInt(b)
            console.log(calculator.power(a,b))
            further()
        })
        
    })
 }
 else if(choice==8){
    rl.question("Enter a Number ",function(a){
      a=parseInt(a)
      console.log(calculator.expo(a))
      
      further()
    })
 }
 else if(choice==9){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.logarithm(a))
        
        further()
    })
 }
 else if(choice==10){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.sine(a))
        
 further()
})
 }
 else if(choice==11){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.cosine(a))
        further()
        
      })
 }
 else if(choice==12){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.tangent(a))
        further()
        
      })
 }
 else if(choice==13){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.insine(a))
        further()
        
      })
 }
 else if(choice==14){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.incosine(a))
        further()
        
      })

 }
 else if(choice==15){
    rl.question("Enter a Number ",function(a){
        a=parseInt(a)
        console.log(calculator.intangent(a))
        further()
        
      })
 }
 else{
 console.log("Wrong Input")
 exit();
 }
 })
}
class calculator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
    static addition(a, b) {
        const ab = a + b;
        return ab;
    }
    static subtraction(a, b) {
        const ab = a - b;
        return ab;
    }
    static multiply(a, b) {
        const ab = a * b;
        return ab;
    }
    static division(a, b) {
        const ab = a / b;
        return ab;
    }
    static power(a, b) {
        return Math.pow(a,b);
    }
    static sqroot(a, b) {
        return Math.sqrt(a,b);
    }
    static cbroot(a, b) {
        return Math.cbrt(a,b);
    }
    static expo(a) {
        return Math.exp(a);
    }
    static logarithm(a) {
        return Math.log(a);
    }
    static sine(a) {
        return Math.sin(a);
    }
    static cosine(a) {
        return Math.cos(a);
    }
    static tangent(a) {
        return Math.tan(a);
    }
    static insine(a) {
        return Math.asin(a);
    }
    static incosine(a) {
        return Math.acos(a);
    }
    static intangent(a) {
        return Math.atan(a);
    }
}


choose()
function further(){
 rl.question("Enter 'go' To Perform Another Calculation Or 'exit' To Terminate Program: ",
function(ch){
 if(ch=="go"){
 console.log("\n")
 choose()
 }
 else if(ch=="exit"){
 console.log("Good Bye Have A Great Day")
 exit()
 }
 else{
 console.log("Open Your Eyes And Enter Correct Input")
 further()
 }
 })
}
console.log(calculator.displayName); // "Point"
console.log(calculator.addition(2, 3))
console.log(calculator.subtraction(2, 3))
rl.question("Enter a Number ",function(a,b){
})
// class marksheet {
//     constructor(name, roll_no) {
//         this.roll_no = roll_no
//         this._name = name

//     }

//     print() {
//         return this._name + " " + this.roll_no

//     }
// }
// class marks extends marksheet {

//     constructor(name, roll_no) {
//         super(name, roll_no);
//         this._maths;
//         this._physics;
//         this._chemistry;
//         this._english;
//         this._urdu;
//         this.obtainedMark;
//         this.totalMarks;
//         this.percent;
//     }
//     get maths() {
//         return this._maths;
//     }

//     set maths(value) {
//         this._maths = value;
//     }
//     set physics(value) {
//         this._physics = value
//     }
//     get physics() {
//         return this._physics
//     }
//     set chemistry(value) {
//         this._chemistry = value
//     }
//     get chemistry() {
//         return this._chemistry
//     }
//     set english(value) {
//         this._english = value
//     }
//     get english() {
//         return this._english
//     }
//     set urdu(value) {
//         this._urdu = value
//     }
//     get urdu() {
//         return this._urdu
//     }
//     get fullName() {
//         console.log('inside getter')
//         return this._name + " " + this.roll_no
//     }
//     percentage() {
//         this.obtainedMark = this._chemistry + this._english + this._maths + this._urdu + this._physics;
//         this.totalMarks = 400;
//         this.percent = (this.obtainedMark / this.totalMarks) * 100
//         console.log("Total percentage is " + this.percent)

//     }
//     printmarks() {
//         console.log("\n*************** REPORT CARD ***************")
//         console.log("\n**NAME:"+this._name+ "*")
//         console.log("\n**ROLL NO:"+this.roll_no+ "*")
//         console.log("\nGrand Obtained Marks: ", this.obtainedMark)
//         console.log("Grand Total Marks: ", this.totalMarks)
//         console.log("Final Percentage is: ", this.percent, "\n")
//         console.log("\n*************** REPORT CARD ***************\n")
//     }

//     grade() {
//         if (this.percent > 80) {
//             console.log("A-1")
//         }
//         else if (this.percent <= 80 && this.percent >= 70) {
//             console.log("A")
//         }
//         else if (this.percent < 70) {
//             console.log("B")
//         }
//         else {
//             console.log("C")
//         }
//     }

// }

// let user = new marksheet("MAHNOOR KHAN", "el-095");
// console.log(user.print()); 
// console.log(user.roll_no);
// console.log(user);
// let hamza = new marks("Hamza khan", "cs-808")
// hamza.maths = 89
// hamza.physics = 67
// hamza.chemistry = 76
// hamza.urdu = 69
// hamza.english = 75
// console.log(hamza.maths)
// console.log(hamza)
// console.log(hamza.percentage())
// console.log(hamza.printmarks())
// console.log(hamza.grade())

// to make a cv with class 
// class cv {
//     constructor(name, email, address, contact, objective, education, skills,major_courses,reference) {
//         this.name = name;
//         this.email = email;
//         this.address = address
//         this.contact = contact;
//         this.objective = objective;
//         this.education = education;

//         this.skills = skills;
//         this.major_courses= major_courses
//         this.reference= reference


//     }
//     printCV() {
//         console.log("\n------" + this.name + "---------\n")
//         console.log("email------" + this.email + "---------\n")
//         console.log("contact------" + this.contact + "---------\n")
//         console.log("Address------" + this.address + "---------\n")
//         console.log("--OBJECTIVE--\n" + this.objective + "\n")
//         console.log("---EDUCATIONS--\n---" + this.education + "\n")
//         console.log("---SKILLS--\n---" + this.skills + "--\n")
//         console.log("---Major courses--\n" + this.major_courses + "-\n")
//         console.log("--Reference--\n------" + this.reference + "---------\n")
//         return this.name + " " + this.email + "  " + this.contact;
//     }


// }
// let mano = new cv("MARIYAM MAHNOOR", "maryammahnoor@gmail.com", 89798268689,"karachi", "To persue my career in your firm", "B.E in Electronics from NED university", "Expertise in python \nHTML CSS  javascript \n c",
// "Anolog integrated circuit\n digital logic Design\n computer programming \n Digital siignal Processing", "will be furnished upon request");
// mano.printCV();

// let hamza = new cv("HAMZA NOORI", "mhamzaor@gmail.com", 897989,"karachi", "To develop value in your firm", "B.s in software from NED university", "Expertise in python \nHTML CSS  javascript \n c",
// "Data structure \n  Design analysis\n computer programming \n Digital siignal Processing", "will be furnished upon request");

// hamza.printCV()


//to make a static function which  cannot be called through a class instance

