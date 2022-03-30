function preload() {}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 50, 40, 500 - 90, 500 - 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(30, 30, 50);
    tint(tintColor);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(15, 50, 30, 400, 100);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(30, 460, 50);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(45, 15, 400, 30, 100);
}

function TakeSnapshot() {
    save(document.getElementById("PictureName").value);
}

function filtter() {
    tintColor = document.getElementById("tintColor").value;
}