let exp = 0;
let expNeeded = 100;
let realmIndex = 0;
let realms = ["Phàm Nhân", "Luyện Khí", "Trúc Cơ", "Kết Đan", "Nguyên Anh", "Hóa Thần"];
let pills = 0;
let weapons = 0;

function cultivate() {
    exp += 10; // Mỗi lần tu luyện tăng 10 exp
    updateUI();
}

function breakthrough() {
    if (exp >= expNeeded && realmIndex < realms.length - 1) {
        exp -= expNeeded;
        realmIndex++;
        expNeeded *= 2; // Mỗi cảnh giới cần nhiều exp hơn
        updateUI();
    } else {
        alert("Tu vi chưa đủ để đột phá!");
    }
}

function refinePill() {
    pills++;
    exp += 50; // Luyện đan giúp tăng nhiều exp hơn
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

// Tự động tu luyện mỗi giây
setInterval(() => {
    cultivate();
}, 1000);

updateUI();
