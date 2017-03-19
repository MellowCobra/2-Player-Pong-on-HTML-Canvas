function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	moveBall();
	movePlayerPaddles();
	drawBall();
	drawPlayerPaddle(playerOne);
	drawPlayerPaddle(playerTwo);
	drawPlayerScores();
	requestAnimationFrame(draw);
}

function drawPlayerPaddle(player) {
	var paddle = player.paddle;
	context.beginPath();
	context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
	context.fillStyle = player.color;
	context.fill();
	context.closePath();
}

function drawBall() {
	context.beginPath();
	context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, false);
	context.fillStyle = ball.color;
	context.fill();
	context.closePath();
}

function drawPlayerScores() {
	context.font = "16px Arial";
	context.fillStyle = playerOne.color;
	context.fillText("Player 1 Score: " + playerOne.score, 20, 20);
	context.fillStyle = playerTwo.color;
	context.fillText("Player 2 Score: " + playerTwo.score, canvas.width - 140, 20);
}

function setupGame() {
	playerOne.score = 0;
	playerTwo.score = 0;
	playerOne.paddle.y = (canvas.height - playerOne.paddle.height)/2;
	playerTwo.paddle.y = (canvas.height - playerTwo.paddle.height)/2;
	spawnBall();
}

setupGame();
draw();
