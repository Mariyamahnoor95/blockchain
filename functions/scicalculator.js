
const { mainModule } = require("process");
var readline = require("readline");
const { callbackify } = require("util");
var takeInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

function squareroot(x) {
    console.log("---Math.sqrt()---")
    console.log(Math.sqrt(x));
    goback();

}
function cuberoot(x) {
    console.log("---Math.cbrt()---")
    console.log(Math.cbrt(x));
    goback();

}
function exponential(x) {
    console.log("---Math.exp()---")
    console.log(Math.exp(x));
    goback();
}
function exponential_1(x) {
    console.log("---Math.expm1()---")
    console.log(Math.expm1(x));
    goback();

}
function loge(x) {
    console.log("---Math.log()---")
    console.log(Math.log(x));
    goback();
}
function logebase10(x) {
    console.log("---Math.logbase10()---")
    console.log(Math.log10(x));
    goback();

}
function logebase2(x) {
    console.log("---Math.logbase2()---")
    console.log(Math.log2(x));
    goback();

}
function loge1plus(x) {
    console.log("---Math.log1p()---")
    console.log(Math.log1p(x));
    goback();
}
function absolute(x) {
    console.log("---Math.abs()---")
    console.log(Math.abs(x));
    goback();

}
function Sign(x) {
    console.log("---Math.sign()---")
    console.log(Math.sign(x));
    goback();

}
function Ceil(x) {
    console.log("---Math.ceil()---")
    console.log(Math.ceil(x));
    goback();

}
function Floor(x) {
    console.log("---Math.floor()---")
    console.log(Math.floor(x));
    goback();

}
function trunc(x) {
    console.log("---Math.trunc()---")
    console.log(Math.trunc(x));
    goback();

}
function Round(x) {
    console.log("---Math.Round()---")
    console.log(Math.round(x));
    goback();

}
function Sin(x) {
    console.log("Math.sin(Math.PI/4): ")
    x = parseInt(x)
    console.log(Math.sin(x));
    goback();

}
function Cos(x) {
    console.log("Math.cos(Math.PI/4): ")
    x = parseInt(x)
    console.log(Math.cos(x));
    goback();
}
function Tan(x) {
    console.log("Math.tan(Math.PI/4): ")
    x = parseInt(x)
    console.log(Math.tan(x));
    goback();

}
function aSin(x) {
    console.log("Math.asin(Math.PI/4): ")
    x = parseInt(x)
    console.log(Math.asin(x));
    goback();

}
function aCos(x) {
    console.log("Math.acos(Math.PI/4): ")
    x = parseInt(x)
    console.log(Math.acos(x));
    goback();
}
function aTan(x) {
    console.log("Math.atan(Math.PI/4): ")
    x = parseInt(x)
    console.log(Math.atan(x));
    goback();

}

function hypotenuse(a, b) {
    console.log("---Math.hypot()---")
    console.log(Math.hypot(a, b))
    goback();
}
function power(num, por) {
    console.log(Math.pow(num, por))
    let sqr = (Math.pow(num, por))
    console.log(Math.sqrt(sqr))
    goback();


};
function add(a, b) {

    console.log("Addition")
    console.log(a + b)

    goback();

};
function sub(a, b) {
    console.log("subtraction")
    console.log(a - b)
    goback();

};
function Mul(a, b) {
    console.log("multiply")
    console.log(a * b)
    goback();

};
function div(a, b) {
    console.log("Divide")
    console.log(a / b)
    goback();
};
function square(x) {
    console.log(x * x)
    takeInput.close()

};
function EXIT_1() {
    7

    takeInput.close();
}
function scientificMath() {
    takeInput.question('enter  of the number?', function (x) {
        takeInput.question('Select a choice 1.) Squre root 2.)cuberoot \n 3.) Exponential 4.) Exponential minus 1 \n  5.) log 6.) log 1+x \n 7.) SIN  8.)COS \n 9.) TAN() 10.) aSIN  \n 11.)aCOS  12.) aTAN()', function (choice) {
            choice = parseInt(choice);
            if (choice === 1) {
                squareroot(x);

            }
            else if (choice === 2) {
                cuberoot(x);
            }
            else if (choice === 3) {
                exponential(x);
            }
            else if (choice === 4) {
                exponential_1(x);
            }
            else if (choice === 5) {
                loge(x);
            }
            else if (choice === 6) {
                loge1plus(x);
            }
            else if (choice === 7) {
                Sin(x);
            }
            else if (choice === 8) {
                Cos(x);
            }
            else if (choice === 9) {
                Tan(x);
            }
            else if (choice === 10) {
                aSin(x);
            }
            else if (choice === 11) {
                aCos(x);
            }
            else if (choice === 12) {
                aTan(x);
            }

            else {
                EXIT_1();
            }
            // takeInput.close();

        });


    })
};
function simpleMath() {
    takeInput.question('enter a number', function (a) {
        takeInput.question('enter another of the number?', function (b) {
            takeInput.question('Select a choice 1.) add 2.)Divide \n 3.) Sub 4.) Multiply \n  5.) power 6.) hypotenuse ', function (choice) {
                choice = parseInt(choice);
                a = parseInt(a)
                b = parseInt(b)

                if (choice === 1) {
                    add(a, b);
                }
                else if (choice === 2) {
                    div(a, b);
                }
                else if (choice === 3) {
                    sub(a, b);
                }
                else if (choice === 4) {
                    Mul(a, b);
                }
                else if (choice === 5) {
                    power(a, b);
                }
                else if (choice === 6) {
                    hypotenuse(a, b);
                }

                else {
                    EXIT_1();
                }
                // takeInput.close();

            });


        })
    })
};

function cal() {
    takeInput.question('Select a choice 1.) Simple Math 2.)scientific Math \n  ', function (choice) {
        choice = parseInt(choice);
        if (choice === 1) {
            simpleMath();
        }
        else if (choice === 2) {
            scientificMath();
        }


        else {
            EXIT_1();
        }
        // takeInput.close();

    })
};
cal();
function goback() {
    takeInput.question('Want to continue in simple math type continue \n or in scientific math type "g continue"\n or go back or exit\n', function (choice) {

        if (choice === "continue") {
            simpleMath();
        }
        else if (choice === "exit") {
            EXIT_1();
        }
        else if (choice === "g continue") {
            scientificMath();
        }
        else if (choice === "go back") {
            cal();
        }
        else {
            EXIT_1();
        }
        // takeInput.close();

    })
};

