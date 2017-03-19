var ball = {
	x: canvas.width/2,
	y: canvas.height/2,
	color: "green",
	radius: 10,
	dx: 0,
	dy: 0,
	numCollisions: 0
}

function randomBallVelocity() {
	var rand = Math.floor(Math.random()*4);
	if (rand === 0) {
		ball.dx = 2;
		ball.dy = 2;
	} else if (rand === 1) {
		ball.dx = -2;
		ball.dy = 2;
	} else if (rand === 2) {
		ball.dx = 2;
		ball.dy = -2;
	} else if (rand === 3) {
		ball.dx = -2;
		ball.dy = -2;
	}
}

function moveBall() {
	// Handle collisions
	ballCollisions();

	// Move the ball
	ball.x += ball.dx;
	ball.y += ball.dy;
}

function ballCollisions() {
	// Collide with top and bottom walls
	if (ball.y + ball.dy <= 0 + ball.radius || ball.y + ball.dy >= canvas.height + ball.radius) {
		ball.dy = -ball.dy;
	}

	// Collide with player paddle
	if (ball.x + ball.dx < 0 + playerOne.paddle.width) {
		if (ball.y > playerOne.y && ball.y < playerOne.paddle.height) {
			ball.dx = -ball.dx;
		}
	}

	// Collide with left wall
	if (ball.x + ball.dx <= 0 + ball.radius) {

		// If colliding with player one paddle, reverse
		// Otherwise, player Two gets a point
		if ((ball.y - ball.radius > playerOne.paddle.y && ball.y - ball.radius < playerOne.paddle.y + playerOne.paddle.height)
		   || (ball.y + ball.radius > playerOne.paddle.y && ball.y + ball.radius < playerOne.paddle.y + playerOne.paddle.height)) {
			ball.dx = -ball.dx;
			increaseBallSpeedOnCollision();
		} else {
			playerTwo.score++;

			// If player 2 got 10 points, they won
			if (playerTwo.score >= 10) {
				alert("Player 2 won!");
				window.location.reload();
			}

			spawnBall();
		}
	}

	// Collide with right wall
	if (ball.x + ball.dx >= canvas.width - ball.radius) {
		// If colliding with player two paddle, reverse
		// Otherwise, player One gets a point
		if ((ball.y - ball.radius > playerTwo.paddle.y && ball.y - ball.radius < playerTwo.paddle.y + playerTwo.paddle.height)
		|| (ball.y + ball.radius > playerTwo.paddle.y && ball.y + ball.radius < playerTwo.paddle.y + playerTwo.paddle.height)) {
			ball.dx = -ball.dx;
			increaseBallSpeedOnCollision();
		} else {
			playerOne.score++;

			// If player 1 got 10 points, they won
			if (playerOne.score >= 10) {
				alert("Player 1 won!");
				window.location.reload();
			}

			spawnBall();
		}
	}
}

function spawnBall() {
	ball.numCollisions = 0;
	ball.x = canvas.width/2;
	ball.y = canvas.height/2;
	randomBallVelocity();
}

function increaseBallSpeedOnCollision() {
	ball.numCollisions++;
	if (ball.numCollisions === 5) {
		ball.numCollisions = 0;
		if (ball.dx > 0) {
			ball.dx += 0.5;
		} else {
			ball.dx -= 0.5;
		}
		if (ball.dy > 0) {
			ball.dy += 0.5;
		} else {
			ball.dy -= 0.5;
		}
	}
}
