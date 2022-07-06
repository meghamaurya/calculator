var btn = document.querySelector(".btn");

function squareNum() {
    num = document.getElementById("num1").value;
    document.getElementById("output1").innerHTML = `The result of squaring the number ${num} is ${num * num}`;
}

function halfOf() {
    num = document.getElementById("num2").value;
    document.getElementById("output2").innerHTML = `Half of ${num} is ${num / 2}`;
}

function percentOf() {
    num1 = document.getElementById("num3").value;
    num2 = document.getElementById("num4").value;
    document.getElementById("output3").innerHTML = `${num1} is ${(num1 / num2) * 100}% of ${num2}.`;
}

function areaOfCircle() {
    radius = document.getElementById("num5").value;
    let area = (Math.PI * radius * radius).toFixed(2);
    document.getElementById("output4").innerHTML = `The area for a circle with radius ${radius} is ${area}.`;
}