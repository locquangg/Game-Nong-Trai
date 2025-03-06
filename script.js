let exp = 0;
let expNeeded = 100;
let realmIndex = 0;
let realms = ["Phàm Nhân", "Luyện Khí", "Trúc Cơ", "Kết Đan", "Nguyên Anh", "Hóa Thần"];
let pills = 0;
let weapons = 0;

function cultivate() {
    exp += 10;
    updateUI();
}

function breakthrough() {
    if (exp >= expNeeded && realmIndex < realms.length - 1) {
        exp -= expNeeded;
        realmIndex++;
        expNeeded *= 2;
        showBreakthroughEffect();
        updateUI();
    } else {
        alert("Tu vi chưa đủ để đột phá!");
    }
}

function refinePill() {
    pills++;
    exp += 50;
    updateUI();
}

function forgeWeapon() {
    weapons++;
    updateUI();
}

function updateUI() {
    document.getElementById("exp").innerText = exp;
    document.getElementById("expNeeded").innerText = expNeeded;
    document.getElementById("realm").innerText = realms[realmIndex];
    document.getElementById("pills").innerText = pills;
    document.getElementById("weapons").innerText = weapons;
}

function showBreakthroughEffect() {
    let gameDiv = document.getElementById("game");
    gameDiv.style.boxShadow = "0px 0px 50px rgba(255, 255, 0, 0.8)";
    setTimeout(() => {
        gameDiv.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.2)";
    }, 1000);
}

setInterval(() => {
    cultivate();
}, 1000);

updateUI();
