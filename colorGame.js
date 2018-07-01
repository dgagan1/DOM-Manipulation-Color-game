var numOfSquares = 6;

var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	h1.style.backgroundColor = "steelblue";

	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();

	console.log(pickedColor);

	colorDisplay.textContent = pickedColor;


	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares = 6;
	h1.style.backgroundColor = "steelblue";

	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetBtn.addEventListener("click", function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();

	console.log(pickedColor);

	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
		for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i]; 

		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(pickedColor === clickedColor){
				messageDisplay.textContent = "Correct!!!";
				resetBtn.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	h1.style.backgroundColor = "steelblue";
});


for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i]; 

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(pickedColor === clickedColor){
			messageDisplay.textContent = "Correct!!!";
			changeColors(clickedColor);
			resetBtn.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr[i] = randomColors();
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}