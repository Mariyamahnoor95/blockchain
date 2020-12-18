
// var readline = require("readline");
// var takeInput = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

// });
// function power(num,por) {
//     console.log(Math.pow(num,por))
//         let sqr = (Math.pow(num,por))
//         console.log(Math.sqrt(sqr))
//         takeInput.close()
    
// };
// takeInput.question('enter a number', function (num) {
//     takeInput.question('enter power of the number?', function (por) {
//         power(num,por);
//     })
//     })
// var studentlist = new Map()

// var HamzaMarksheet=new Map()
// var phymap=new Map()
// phymap.set ("TotalMarks", "100")
// phymap.set("MarksObtained", "75")
// HamzaMarksheet.set("Physics", phymap)
// var chemmap=new Map()
// chemmap.set ("TotalMarks", "100")
// chemmap.set("MarksObtained", "85")
// HamzaMarksheet.set("Chemistry", chemmap)
// var compmap=new Map()
// compmap.set ("TotalMarks", "100")
// compmap.set("MarksObtained", "90")
// HamzaMarksheet.set("Computer", compmap)
// var mathmap=new Map()
// mathmap.set ("TotalMarks", "100")
// mathmap.set("MarksObtained", "95")
// HamzaMarksheet.set("Maths", mathmap)
// var urdumap=new Map()
// urdumap.set ("TotalMarks", "100")
// urdumap.set("MarksObtained", "75")
// HamzaMarksheet.set("Urdu", urdumap)
// studentlist.set("hamza",HamzaMarksheet)
// console.log(studentlist.size)
// console.table(studentlist)

// var bilalMarksheett=new Map()
// var phymap=new Map()
// phymap.set ("TotalMarks", "100")
// phymap.set("MarksObtained", "85")
// bilalMarksheett.set("Physics", phymap)
// var chemmap=new Map()
// chemmap.set ("TotalMarks", "100")
// chemmap.set("MarksObtained", "75")
// bilalMarksheett.set("Chemistry", chemmap)
// var compmap=new Map()
// compmap.set ("TotalMarks", "100")
// compmap.set("MarksObtained", "80")
// bilalMarksheett.set("Computer", compmap)
// var mathmap=new Map()
// mathmap.set ("TotalMarks", "100")
// mathmap.set("MarksObtained", "85")
// bilalMarksheett.set("Maths", mathmap)
// var urdumap=new Map()
// urdumap.set ("TotalMarks", "100")
// urdumap.set("MarksObtained", "65")
// bilalMarksheett.set("Urdu", urdumap)
// studentlist.set("Bilal",bilalMarksheett)
// console.log(studentlist.size)
// console.log(studentlist)

// console.table(bilalMarksheett )

// var total=0;
// var obtained=0;
// var arr=bilalMarksheett.entries()
// for (item of arr){
//   var persubject = ((bilalMarksheett.get(item[0]).get("MarksObtained")/bilalMarksheett.get(item[0]).get("TotalMarks")))*100
//  console.log("Percentage of "+item[0]+" :"+ persubject)
//  total=total+parseInt(bilalMarksheett.get(item[0]).get("TotalMarks"))
//  obtained=obtained+parseInt(bilalMarksheett.get(item[0]).get("MarksObtained"))
//  var totalpercentage=(obtained/total)*100
// }

// console.log("\n*************** REPORT CARD ***************")
// console.log("\nGrand Obtained Marks: ",obtained)
// console.log("Grand Total Marks: ", total)
// console.log("Final Percentage is: ",totalpercentage,"\n")
// console.log("\n*************** REPORT CARD ***************\n")