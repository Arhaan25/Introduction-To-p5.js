function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 150, 100, 200, 200)
    rect(50, 25, 50, 400)
    rect(100, 25, 400, 50)
    rect(500, 25, 50, 400)
    rect(100, 375, 400, 50)
}

function take_snapshot() {
    save('personal_photo.png')
}

