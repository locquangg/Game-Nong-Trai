const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tải hình ảnh đồ họa
const treeImg = new Image();
treeImg.src = "tree.png";

const fieldImg = new Image();
fieldImg.src = "field.png";

// Hệ thống ngày và đêm
let time = 0;
function updateDayNight() {
    time = (time + 1) % 200;
    let brightness = 1 - Math.abs(100 - time) / 100;
    document.body.style.backgroundColor = `rgba(135, 206, 235, ${brightness})`;
}

// Hiệu ứng cây cối đung đưa
let trees = [{ x: 200, y: 300, sway: 0 }];
function drawTrees() {
    trees.forEach(tree => {
        tree.sway = Math.sin(Date.now() / 500) * 5;
        ctx.drawImage(treeImg, tree.x + tree.sway, tree.y, 80, 100);
    });
}

// Vẽ trang trại
function drawFarm() {
    ctx.drawImage(fieldImg, 100, 400, 600, 200);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFarm();
    drawTrees();
    updateDayNight();
    requestAnimationFrame(gameLoop);
}

gameLoop();
