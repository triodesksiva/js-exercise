function alertfun() {
	var a = document.getElementById('text4').innerHTML = "hi this is javascript tutorial";
	alert(a);
}
function clickme() {
	var a = document.getElementById('click').innerHTML = "onclick buttons are most useful button.";
	document.getElementById('insert').innerHTML = a;
}
function dblclick() {
	var a = document.getElementById('click').innerHTML = "Double click buttons was working";
	document.getElementById('insert1').innerHTML = a;
}
function keyfun() {
	var a = document.getElementById('keyup').value;
	document.getElementById('ans').innerHTML = a;
}
function keydown() {
	var a = document.getElementById('key1').value;
	document.getElementById('ans1').innerHTML = a;
}
function keypress() {
	var a = document.getElementById('key2').value;
	document.getElementById('ans2').innerHTML = a;
}
function focusfun() {
	 document.getElementById('key3').style.background = "green";
	
}
function blurfun() {
	 document.getElementById('key3').style.background = "red";
	
}
function clickvalue() {
	var items = ["pizza","burger","springrole","dhosa","idli","rice","veg-rice","sambar-rice","biriyani","veg-biriyani"]
	var ans1 = "";
	var i;
	for(i = 0; i < items.length; i++) {
		ans1 += items[i] + "<br>";
	}
	document.getElementById('res1').innerHTML = ans1;
}
function clickvalue1() {
	var a = document.getElementById('menu').value;
	var ans;
	switch(a) {
		case 'pizza':
		case 'burger':
		case 'springrole':
		case 'dhosa':
		case 'idli':
		case 'veg-rice':
		case 'sambar-rice':
		case 'biriyani':
		case 'veg-biriyani':
		case 'ice-biriyani':
		case 'cold-coffee':
		case 'tea':
		ans = "sure! Avalialable........";
		break;
		case 'egg-rice':
		default:
		ans = "sorry! Just Finished";

	}
	document.getElementById('res2').innerHTML = ans;
}
function whilefun() {
	var text = "";
    var i = 0;
    do {
        text += "<br> The number is " + i;
        i++;
    }
    while (i < 8);
    document.getElementById('result').innerHTML = text;
}

    
function operators() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value1').innerHTML = (a === b);
}
function values() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value2').innerHTML = (a == b);
}
function notequal() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value3').innerHTML = (a != b);
}
function notdblequal() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value4').innerHTML = (a !== b);
}
function gt() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value5').innerHTML = (a > b);
}
function lt() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value6').innerHTML = (a < b);
}
function gtequal() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value7').innerHTML = (a >= b);
}
function ltequal() {
	var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
	document.getElementById('value8').innerHTML = (a <= b);
}

