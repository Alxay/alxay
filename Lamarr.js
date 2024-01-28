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

function update() {
    // Handle player movement
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
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
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

    // Uruchom grę
    gameLoop();
}
