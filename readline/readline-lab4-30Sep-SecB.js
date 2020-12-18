var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function name(toString) {
    // Insert code to do whatever with sum here.
    console.log('\nName:', toString);
}
function mail(toString) {
    // Insert code to do whatever with sum here.
    console.log('Email:', toString);
}
function address(toString) {
    // Insert code to do whatever with sum here.
    console.log('Home Address:', toString);
}
function cellno(Number) {
    // Insert code to do whatever with sum here.
    console.log('Mobile No:', Number);
}
function qual(toString) {
    // Insert code to do whatever with sum here.
    console.log('Qualification:', toString);
}
function work(toString) {
    // Insert code to do whatever with sum here.
    console.log('Working as:', toString, "\n");
}

rl.question('Enter Your Name: ', function (a) {
    rl.question('Enter Your Email Address: ', function (b) {
        rl.question('Enter Your Home Address: ', function (c) {
            rl.question('Enter Your Mobile Number: ', function (d) {
                rl.question('Enter Your Qualification: ', function (e) {
                    rl.question('Enter Your Job: ', function (f) {
    name(a);
    mail(b);
    address(c);
    cellno(d);
    qual(e);
    work(f);
    rl.close();
                    });
                });
            });
        });
    });
});