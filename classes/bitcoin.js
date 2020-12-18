// var transaction = new Map()
// var input = new Map([["input1", 10],
// ["input2", 15 ],
// ]);
// var output = new Map([["output1", 5]
// ]);

// var thash=new  Map()
// thash.set("thash1",Math.random())
// var msg= new Map()
// msg.set("msg1","transaction frem jon to sam")
// transaction.set("1transaction",[input,output,thash,msg])
// console.log(transaction)
class transaction {
    constructor(thash,confirmation,timestamp) {
        this.input 
        this.output 
        this.timestamp = timestamp
        this.thash = thash
        this.confirmation= confirmation
       
    }

    tranprint() {
        console.log("\n*************** transaction Height ***************")
                console.log("\nHeight:          "+this.input)
                console.log("\nTranHash:         "+this.thash)
                console.log("\nTimeStamp:     "+this.timestamp)
                console.log("\nConfirmation:  "+this.confirmation)
                console.log("\nInput:        "+this.input)
                console.log("\nOutput:        "+this.output)
             
        console.log("\n***************transaction Height ***************\n")

    }
}
// block 1 transaction
var b1transaction1= new transaction("793a084c50b3eb69b98fe11a290164e8369e05366ca910432beec745a5eae863",96,new Date())
var b1transaction2= new transaction("b369b9f5107ad1d551957e2937cb3dc9dcf98961bf5bd3e799668e6911e6721d",99,new Date())
var b1transaction3= new transaction("4ce8a89c86cda6a9f108e5ec4d033f2104cfe38a774dd0fdbe46e79dd3346c8b",99,new Date())
// block 2 transaction
var b2transaction1= new transaction("bb711b4e07948842a6d02006b7853ee0d9c29e98bddbced74f85f76c4b1fe1af",103,new Date())
var b2transaction2= new transaction("03d891321c326cabb062f946d877e30da916fba0c0b535954e0351eaca400255",104,new Date())
var b2transaction3= new transaction("3d04a3e65b97e2bc1d177b05d36f4aedc9c8676b27a892e44e5a8534e0ec9310",104,new Date())


b1transaction1.input=[1,1]   
b1transaction1.output=1
b1transaction2.input=[1,2,3,4]
b1transaction2.output=[1,2]
b1transaction3.input=[1]
b1transaction3.output=[1,2]
console.log(b1transaction1)
b1transactions= new Map()
b1transactions.set("transaction_1",b1transaction1)
b1transactions.set("transaction_2",b1transaction2)
b1transactions.set("transaction_3",b1transaction3)

b2transaction1.input=[1,1]   
b2transaction1.output=1
b2transaction2.input=[1,2,3,4]
b2transaction2.output=[1,2]
b2transaction3.input=[1]
b2transaction3.output=[1,2,3.4,5,6,7]
console.log(b2transaction1)
b2transactions= new Map()
b2transactions.set("transaction_1",b2transaction1)
b2transactions.set("transaction_2",b2transaction2)
b2transactions.set("transaction_3",b2transaction3)


class Block {
    constructor(height,hash,confirmation,timestamp,prehash,b1transactions) {
        this.height = height
        this.hash = hash
        this.timestamp = timestamp
        this.prehash = prehash
        this.confirmation= confirmation
        this.b1transaction= b1transactions
    }

    print() {
        console.log("\n*************** Block Height ***************")
            console.log("\nHeight:          "+this.height)
                console.log("\nHash:          "+this.hash)
                console.log("\nTimeStamp:     "+this.timestamp)
                console.log("\nPrehash:       "+this.prehash)
                console.log("\nConfirmation:  "+this.confirmation)
                console.log("\nTransaction:   "+this.b1transactions)
        console.log("\n*************** Block Height ***************\n")

    }
}
var block_1= new Block(659800,"0000000000000000000ddb9e7d8747fa25e843b8f9bd13b18ba813349ce874a7",5,new Date(),"00000000000000000000f716d50cc2f0434a620d82c7e2157e12f6463a5bd487",b1transactions)
console.log(block_1)
// block_1.print()
var block_2= new Block(659799,"00000000000000000000f716d50cc2f0434a620d82c7e2157e12f6463a5bd487",102,new Date(),"0000000000000000000450b8dcfbd4a11f14ba0622d0bf90b8e604f83bba6a6c",b2transactions)
console.log(block_2)
// block_2.print()

