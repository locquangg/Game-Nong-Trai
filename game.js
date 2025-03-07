const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Tải hình ảnh nền và cây trồng
    this.load.image('background', 'https://i.imgur.com/3e5z5zA.png'); // Link ảnh nền
    this.load.image('crop', 'https://i.imgur.com/5z5z5zA.png'); // Link ảnh cây trồng
}

function create() {
    // Thêm nền
    this.add.image(400, 300, 'background');

    // Tạo một cây trồng
    const crop = this.add.image(400, 300, 'crop').setInteractive();
    crop.setScale(0.5); // Thu nhỏ kích thước cây trồng

    // Khi nhấp vào cây trồng, nó sẽ biến mất (thu hoạch)
    crop.on('pointerdown', () => {
        crop.destroy(); // Xóa cây trồng
        console.log('Bạn đã thu hoạch cây trồng!');
    });
}

function update() {
    // Cập nhật logic game (nếu cần)
                    }
