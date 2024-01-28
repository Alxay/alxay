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
    // Handle player movement within the specified area
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

    // Update bullets
    bullets = bullets.filter(bullet => bullet.x < canvas.width);
    for (let bullet of bullets) {
        bullet.x += 10; // Bullet speed

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

    // Shoot bullets on Space key press
    if (e.key === " ") {
        bullets.push({
            x: player.x + player.width,
            y: player.y + player.height / 2 - 2, // Adjust bullet position
            width: 10,
            height: 4
        });
    }
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

function startGame() {
    // Ukryj elementy HTML, które nie są potrzebne podczas gry
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Pokaż canvas dla gry
    canvas.style.display = 'block';

    // Inicjalizuj wrogów
    for (let i = 0; i < 5; i++) {
        enemies.push({
            x: Math.random() * (canvas.width - 20),
            y: Math.random() * (canvas.height - 20),
            width: 20,
            height: 20
        });
    }

    // Uruchom grę
    gameLoop();
}

// Funkcja sprawdzająca kolizję dwóch prostokątów
function collision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y;
}
