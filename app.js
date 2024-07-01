document.write("<br>");
document.write("<h3>Question no 01</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques1() ">Click Me</button>');
document.write("<br>");
document.write("<br>");
function ques1() {

    var userInput = parseInt(prompt('Please! put a positive integer'));
    if (isNaN(userInput) || userInput <= 0) {
        alert("Please enter a valid positive integer.");
        return;
    }

    var roundOff = Math.round(userInput);
    var floorValue = Math.floor(userInput);
    var ceilValue = Math.ceil(userInput);

    var output = "Number: " + userInput + "<br>";
    output += "Round off value: " + roundOff + "<br>";
    output += "Floor value: " + floorValue + "<br>";
    output += "Ceil value: " + ceilValue + "<br>";
    document.getElementById("output").innerHTML = output;
}
document.write(`<div id="output"></div><br>`)

// question no 2

document.write("<h3>Question no 02</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques2();">Click Me</button>');
function ques2() {
    var userInput = parseFloat(prompt('Please! put a negative floating point'));
    if (isNaN(userInput) || userInput >= 0) {
        alert("Please enter a valid negative floating-point number.")
        return;
    }

    var roundOff = Math.round(userInput);
    var floorValue = Math.floor(userInput);
    var ceilValue = Math.ceil(userInput);

    var output = "Number: " + userInput + "<br>";
    output += "Round off value: " + roundOff + "<br>";
    output += "Floor value: " + floorValue + "<br>";
    output += "Ceil value: " + ceilValue;
    document.getElementById("out").innerHTML = output;
}
document.write(`<br><br><div id="out"></div>`)
document.write("<br>");
document.write("<br>");

//question no 3

document.write("<h3>Question no 03</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques3()">Click Me</button>');
function ques3() {
    var number = parseFloat(prompt('put the absolute value of a number is'));
    var absoluteValue = Math.abs(number);
    document.getElementById("absoluteValue").innerText = "The absolute value of " + number + " is " + absoluteValue + ".";
}
document.write(`<br><br><div id="absoluteValue"></div>`)
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    var diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceValue").textContent = "The dice rolled: " + diceValue;
};
document.write(`<br><br><div id="diceValue"></div>`)
document.write("<br>");
document.write("<br>");
//question no 5
document.write("<h3>Question no 05</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
function ques5() {
    var randomNum = Math.random();
    var coinValue = randomNum < 0.5 ? "Heads" : "Tails";
    document.getElementById("coinResult").innerText = "The result of the coin toss is: " + coinValue;
}
document.write(`<br><br><div id="coinResult"></div>`)

// document.write('<div id="pere"></div>')
document.write("<br>");
document.write("<br>");

//question no 6

document.write("<h3>Question no 06</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques6()"">Click Me</button>');
function ques6() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").innerText = "Random Number: " + randomNumber;
}
document.write('<br><br><div id="randomNumber"></div>')
document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    var userInput = prompt('Enter your wight in kilogram').toLowerCase();

    // Regular expression to extract the weight
    var regex = /(\d+(\.\d+)?)\s*(kg|kilograms|kgs)?/;
    var match = userInput.match(regex);

    if (match) {
        var weight = parseFloat(match[1]);
        var unit = match[3] || "kg";
        document.getElementById("displayWeight").innerText = "Your weight is: " + weight + " " + unit;
    } else {
        document.getElementById("displayWeight").innerText = "Invalid input. Please enter your weight in the correct format.";
    }
}
document.write('<br><br><div id="displayWeight"></div>')
document.write("<br>");
document.write("<br>");


//question no 8

document.write("<h3>Question no 08</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques8()">Click Me</button>');
function ques8() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var userGuess = parseInt(prompt("userGuess!\r from 1 to 10"));
    if (userGuess === secretNumber) {
        alert("Congratulations! You guessed the secret number.")
    } else {
        alert("Sorry, try again.\rNumber is " + secretNumber)
    }
}
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075
