const paddleHeight = 50;
const paddleWidth = 10;

// Define player objects for players one and two
var playerOne = {
	upPressed: false,
	downPressed: false,
	score: 0,
	color: "red",
	paddle: {
		width: paddleWidth,
		height: paddleHeight,
		x: 0,
		y: canvas.height/2
	}
};

var playerTwo = {
	upPressed: false,
	downPressed: false,
	score: 0,
	color: "blue",
	paddle: {
		width: paddleWidth,
		height: paddleHeight,
		x: canvas.width - paddleWidth,
		y: canvas.height/2
	}
};

document.addEventListener("keydown", function(event) {
	if (event.keyCode === 38) {
		playerTwo.upPressed = true;
	} else if (event.keyCode === 40) {
		playerTwo.downPressed = true;
	} else if (event.keyCode === 87) {
		playerOne.upPressed = true;
	} else if (event.keyCode === 83) {
		playerOne.downPressed = true;
	}
}, false);

document.addEventListener("keyup", function(event) {
	if (event.keyCode === 38) {
		playerTwo.upPressed = false;
	} else if (event.keyCode === 40) {
		playerTwo.downPressed = false;
	} else if (event.keyCode === 87) {
		playerOne.upPressed = false;
	} else if (event.keyCode === 83) {
		playerOne.downPressed = false;
	}
}, false);

function movePlayerPaddles() {
	if (playerOne.upPressed && playerOne.paddle.y > 0) {
		playerOne.paddle.y -= 5;
	}
	if (playerOne.downPressed && playerOne.paddle.y < canvas.height - playerOne.paddle.height) {
		playerOne.paddle.y +=5;
	}
	if (playerTwo.upPressed && playerTwo.paddle.y > 0) {
		playerTwo.paddle.y -= 5;
	}
	if (playerTwo.downPressed && playerTwo.paddle.y < canvas.height - playerTwo.paddle.height) {
		playerTwo.paddle.y += 5;
	}
}
