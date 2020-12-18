// var students=[
//     {id:'1',name:'ahmedabbas',Fname:'abbasali',class:'2',section:'A',monthlyfees:'5500',admissionfees:'5000',reportcard:"marksheet"},
//     {id:'2',name:'rehan',Fname:'amjad',class:'3',section:'B',monthlyfees:'5500',admissionfees:'5000',reportcard:"smarksheet"},
//     {id:'3',name:'ibrahim',Fname:'mudassir',class:'4',section:'C',monthlyfees:'5500',admissionfees:'5000',reportcard:"tmarksheet"},
//     {id:'4',name:'usama',Fname:'karim',class:'5',section:'D',monthlyfees:'5500',admissionfees:'5000',reportcard:"fmarksheet"},
//     {id:'5',name:'fatima',Fname:'ali',class:'6',section:'E',monthlyfees:'5500',admissionfees:'5000',reportcard:"ffmarksheet"},
//     {id:'6',name:'fizza',Fname:'khan',class:'7',section:'F',monthlyfees:'5500',admissionfees:'5000',reportcard:"smarksheet"},
//     {id:'7',name:'ayesha',Fname:'mustafa',class:'8',section:'G',monthlyfees:'5500',admissionfees:'5000',reportcard:"semarksheet"}
//     ];

//     var studentsIds=students.map(function(sts){
//         return console.log(sts.name);
//     });
//     var Marksheet=new Map()
//     var phymap=new Map()
//     phymap.set ("TotalMarks", "100")
//     phymap.set("MarksObtained", "75")
//     HamzaMarksheet.set("Physics", phymap)
//     var chemmap=new Map()
//     chemmap.set ("TotalMarks", "100")
//     chemmap.set("MarksObtained", "85")
//     HamzaMarksheet.set("Chemistry", chemmap)
//     var compmap=new Map()
//     compmap.set ("TotalMarks", "100")
//     compmap.set("MarksObtained", "90")
//     HamzaMarksheet.set("Computer", compmap)
//     var mathmap=new Map()
//     mathmap.set ("TotalMarks", "100")
//     mathmap.set("MarksObtained", "95")
//     HamzaMarksheet.set("Maths", mathmap)
//     var urdumap=new Map()
//     urdumap.set ("TotalMarks", "100")
//     urdumap.set("MarksObtained", "75")
//     HamzaMarksheet.set("Urdu", urdumap)
//     studentlist.set("hamza",HamzaMarksheet)
//     console.log(studentlist.size)
//     console.table(studentlist)
//     var bilalMarksheett=new Map()
//     var phymap=new Map()
//     phymap.set ("TotalMarks", "100")
//     phymap.set("MarksObtained", "85")
//     bilalMarksheett.set("Physics", phymap)
//     var chemmap=new Map()
//     chemmap.set ("TotalMarks", "100")
//     chemmap.set("MarksObtained", "75")
//     bilalMarksheett.set("Chemistry", chemmap)
//     var compmap=new Map()
//     compmap.set ("TotalMarks", "100")
//     compmap.set("MarksObtained", "80")
//     bilalMarksheett.set("Computer", compmap)
//     var mathmap=new Map()
//     mathmap.set ("TotalMarks", "100")
//     mathmap.set("MarksObtained", "85")
//     bilalMarksheett.set("Maths", mathmap)
//     var urdumap=new Map()
//     urdumap.set ("TotalMarks", "100")
//     urdumap.set("MarksObtained", "65")
//     bilalMarksheett.set("Urdu", urdumap)
//     studentlist.set("Bilal",bilalMarksheett)
//     console.log(studentlist.size)
//     console.log(studentlist)
//     console.table(bilalMarksheett )
//     var total=0;
//     var obtained=0;
//     var arr=bilalMarksheett.entries()
//     for (item of arr){
//      var persubject = ((bilalMarksheett.get(item[0]).get("MarksObtained")/bilalMarksheett.get(item[0]).get("TotalMarks")))*1
//     00
//     console.log("Percentage of "+item[0]+" :"+ persubject)
//     total=total+parseInt(bilalMarksheett.get(item[0]).get("TotalMarks"))
//     obtained=obtained+parseInt(bilalMarksheett.get(item[0]).get("MarksObtained"))
//     var totalpercentage=(obtained/total)*100
//     }
//     console.log("\n*************** REPORT CARD ***************")
//     console.log("\nGrand Obtained Marks: ",obtained)
//     console.log("Grand Total Marks: ", total)
//     console.log("Final Percentage is: ",totalpercentage,"\n")
//     console.log("\n*************** REPORT CARD ***************\n")    

// // //SCHOOL MANAGNMENT SYSTEM:                         

// var studentsdata =new Map()
// studentsdata.set('name','M.Hussain')
// studentsdata.set('Fname','aneelahmed')
// studentsdata.set('class','6')
// studentsdata.set('lastclass','5')
// studentsdata.set('lastpassingmarks','75')
// studentsdata.set('rollnumber','105')


// // //ADMISSIONFEES:                                  
//   studentsdata.set ('monthlyfees','5500')
// studentsdata.set('extractrculumfees','1000')
// studentsdata.set('gamefees','1000') 
// // //MARKSOBTAINPART:                               
// studentsdata.set('english','status pass/fail') 
// studentsdata.set('urdu','status:pass/fail')
// studentsdata.set('isl','status:pass/fail')
// studentsdata.set('comp','status:pass/fail') 
// console.log(studentsdata.get("comp"))
// console.log(studentsdata)
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
 display.addition()
 }
 else if(choice==2){
 display.subtraction()
 }
 else if(choice==3){
 display.multiplication()
 }
 else if(choice==4){
 display.division()
 }
 else if(choice==5){
 display.sqroot()
 }
 else if(choice==6){
 display.curoot()

 }
 else if(choice==7){
 display.power()
 }
 else if(choice==8){
 display.expo()
 }
 else if(choice==9){
 display.logarithm()
 }
 else if(choice==10){
 display.sine()
 }
 else if(choice==11){
 display.cosine()
 }
 else if(choice==12){
 display.tangent()
 }
 else if(choice==13){
 display.insine()
 }
 else if(choice==14){
 display.incosine()

 }
 else if(choice==15){
 display.intangent()
 }
 else{
 console.log("Wrong Input")
 exit();
 }
 })
}
class calculator {
    constructor(add,sub,mul,div,sqr,cur,pow,exp,logg,sin,cos,tan,insin,incos,intan){
        this.add=add
        this.sub=sub
        this.mul=mul
        this.div=div
        this.sqr=sqr
        this.cur=cur
        this.pow=pow
        this.exp=exp
        this.logg=logg
        this.sin=sin
        this.cos=cos
        this.tan=tan
        this.insin=insin
        this.incos=incos
        this.intan=intan
       
        }
 
 addition(){
 var a=10, b=20
 this.add=a+b
 console.log("Addition Is: ", this.add, "\n")
 further()
 }
 subtraction(){
 var aa=5, bb=3
 this.sub=aa-bb
 console.log("Subtraction Is: ", this.sub, "\n")
 further()
 }
 multiplication(){
 var aaa=4, bbb=5
 this.mul=aaa*bbb
 console.log("Multiplication Is: ", this.mul, "\n")
 further()
 }
 division(){
 var aaaa=10, bbbb=2
 this.div=aaaa/bbbb
 console.log("Division Is: ", this.div, "\n")
 further()
 }
 sqroot(){
 this.sqr=7
 console.log("Square Root Is: ", Math.sqrt(this.sqr), "\n")
 further()
 }
 curoot(){
 this.cur=8
 console.log("Cube Root Is: ",Math.cbrt(this.cur), "\n")
 further()

 }
 power(){
 var base=2
 var exponent=3
 this.pow=Math.pow(base,exponent)
 console.log("Power Is: ", this.pow, "\n")
 further()
 }
 expo(){
 this.exp=4
 console.log("Exponent Is: ", Math.exp(this.exp), "\n")
 further()
 }
 logarithm(){
 this.logg=3
 console.log("Logarithm Is: ", Math.log(this.logg), "\n")
 further()
 }
 sine(){
 this.sin=6
 console.log("Sin Is: ", Math.sin(this.sin), "\n")
 further()
 }
 cosine(){

 this.cos=4
 console.log("Cosine Is: ", Math.cos(this.cos), "\n")
 further()
 }
 tangent(){
 this.tan=7
 console.log("Tangent Is: ", Math.tan(this.tan), "\n")
 further()
 }
 insine(){
 this.insin=8
 console.log("Inverse Of Sin Is: ", Math.asin(this.insin), "\n")
 further()
 }
 incosine(){
 this.incos=5
 console.log("Inverse Of Cos Is: ", Math.acos(this.incos), "\n")
 further()
 }
 intangent(){
 this.intan=10
 console.log("Inverse Of Tangent Is: ", Math.atan(this.intan), "\n")
 further()
 }

}
var display= new calculator()
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



g