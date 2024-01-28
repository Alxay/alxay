const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    color: "blue",
    speed: 5
};

let bullets = [];
let enemies = [];

let enemyImage = new Image();
enemyImage.src = 'image-removebg-preview.png';

let mouseDown = false;

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawBullets() {
    ctx.fillStyle = "red";
    for (let bullet of bullets) {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
}

function drawEnemies() {
    for (let enemy of enemies) {
        ctx.drawImage(enemyImage, enemy.x, enemy.y, enemy.width, enemy.height);
    }
}

function update() {
    // Handle player movement within the canvas
    if (keys["ArrowUp"] && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys["ArrowDown"] && player.y < canvas.height - player.height) {
        player.y += player.speed;
    }
    if (keys["ArrowLeft"] && player.x > 0) {
        player.x -= player.speed;
    }
    if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }

    // Handle shooting with the right mouse button
    if (mouseDown) {
        bullets.push({
            x: player.x + player.width,
            y: player.y + player.height / 2 - 2,
            width: 10,
            height: 4
        });
    }

    // Update bullets
    bullets = bullets.filter(bullet => bullet.x < canvas.width);
    for (let bullet of bullets) {
        bullet.x += 10;

        // Check for bullet-enemy collisions
        for (let enemy of enemies) {
            if (collision(bullet, enemy)) {
                // Handle collision, e.g., remove enemy
                enemies.splice(enemies.indexOf(enemy), 1);
            }
        }
    }

    // Update enemies
    for (let enemy of enemies) {
        enemy.x -= 2; // Enemy speed
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    drawEnemies();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

const keys = {};

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

window.addEventListener("mousedown", (e) => {
    if (e.button === 2) {
        mouseDown = true;
    }
});

window.addEventListener("mouseup", (e) => {
    if (e.button === 2) {
        mouseDown = false;
    }
});

window.addEventListener("mousemove", (e) => {
    if (mouseDown) {
        player.x = e.clientX - canvas.getBoundingClientRect().left - player.width / 2;
        player.y = e.clientY - canvas.getBoundingClientRect().top - player.height / 2;
    }
});

function startGame() {
    // Hide HTML elements not needed during the game
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Show canvas for the game
    canvas.style.display = 'block';

    // Initialize enemies
    for (let i = 0; i < 5; i++) {
        enemies.push({
            x: Math.random() * (canvas.width - 20),
            y: Math.random() * (canvas.height - 20),
            width: 20,
            height: 20
        });
    }

    // Start the game loop
    gameLoop();
}

function collision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y;
}
