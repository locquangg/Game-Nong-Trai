const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Thời gian ngày và đêm
let time = 0; // 0 = sáng, 100 = đêm
function updateDayNight() {
    time = (time + 1) % 200;
    let brightness = 1 - Math.abs(100 - time) / 100;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${brightness})`;
}

// Cây cối đung đưa
let trees = [{ x: 200, y: 300, sway: 0 }];
function drawTrees() {
    trees.forEach(tree => {
        tree.sway = Math.sin(Date.now() / 500) * 5;
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.ellipse(tree.x + tree.sway, tree.y, 40, 60, 0, 0, Math.PI * 2);
        ctx.fill();
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrees();
    updateDayNight();
    requestAnimationFrame(gameLoop);
}

gameLoop();
