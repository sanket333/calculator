let screen = document.getElementById("screen");
let add = document.getElementById("add");
let substract = document.getElementById("substract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equals = document.getElementById("equals");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let clearScreen = document.getElementById("clear-screen");
let remove = document.getElementById("delete");
let exp = "";
function show() {
    screen.value += this.value;
}
clearScreen.addEventListener("click",function func(){
    screen.value = "";
})
remove.addEventListener("click",function func(){
    screen.value = screen.value.substring(0, screen.value.length-1)
})
one.addEventListener("click", show);
two.addEventListener("click", show);
three.addEventListener("click", show);
four.addEventListener("click", show);
five.addEventListener("click", show);
six.addEventListener("click", show);
seven.addEventListener("click", show);
eight.addEventListener("click", show);
nine.addEventListener("click", show);
zero.addEventListener("click", show);
add.addEventListener("click", show);
substract.addEventListener("click", show);
multiply.addEventListener("click", show);
divide.addEventListener("click", show);
equals.addEventListener("click", function func() {
    var temp = screen.value;
    if(temp == "")
        return;
    var exp = [];
    var temp2 = 0;
    var i;
    
    for (var i = 1; i < temp.length; i += 2) {
        if (isNaN(temp[i])) {
            alert("check your expression.");
            screen.value = "";
            return;
        }

    }
    for (i = 0; i < temp.length; i++) {
        if (temp[i] == "+" || temp[i] == "-" || temp[i] == "*" || temp[i] == "/") {
            var x = Number(temp.substring(temp2, i));
            exp.push(x);
            temp2 = i + 1;
            exp.push(temp[i]);
        }
    }
    exp.push(Number(temp.substring(temp2, temp.length)));
    console.log(exp);

    var result = 0;
    var a = 0;
    var countDiv = 0;
    var countMul = 0;
    var countAdd = 0;
    var countSub = 0;
    for (var i = 0; i < exp.length; i++) {
        if (exp[i] == "/")
            countDiv++;
        if (exp[i] == "*")
            countMul++;
        if (exp[i] == "+")
            countAdd++;
        if (exp[i] == "-")
            countSub++;
    }
    while (countDiv) {
        if (exp[a] == "/") {
            result = Number(exp[a - 1]) / Number(exp[a + 1]);
            exp.splice(a - 1, 3, result);
            console.log(exp);
            a -= 1;
            countDiv--;
        }
        a++;
        if (exp.length == 1)
            screen.value = exp;

    }
    a = 0;
    while (countMul) {
        if (exp[a] == "*") {
            result = Number(exp[a - 1]) * Number(exp[a + 1]);

            exp.splice(a - 1, 3, result);
            console.log(exp);
            a -= 1;
            countMul--;
        }
        a++;
        if (exp.length == 1)
            screen.value = exp;
    }
    a = 0;

    while (countAdd) {
        console.log("count: " + countAdd)
        if (exp[a] == "+") {
            result = Number(exp[a - 1]) + Number(exp[a + 1]);
            console.log("result: " + result);
            exp.splice(a - 1, 3, result);
            a -= 1;
            countAdd--;
        }
        a++;
        console.log("expressionLength: " + exp.length)
        if (exp.length == 1)
            screen.value = exp;
    }
    a = 0;
    while (countSub) {
        if (exp[a] == "-") {
            result = Number(exp[a - 1]) - Number(exp[a + 1]);
            exp.splice(a - 1, 3, result);
            console.log(exp);
            a -= 1;
            countSub--;
        }
        a++;
        if (exp.length == 1)
            screen.value = exp;
    }
});






