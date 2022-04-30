class Node {
    constructor(x, y, r, scale = random(0.8, 2.5)) {
        this.displayLocation = createVector(x, y);
        this.location = createVector(x, y);
        this.velocity = createVector(random(-0.02, 0.02), -scale * 0.6);
        this.r = r;
        this.scale = scale;
        this.size = this.scale * windowHeight / 100;
        this.transparency = 255 - random(80 / scale / 2, 200 / scale / 2);
    }

    display() {
        noFill();
        stroke(this.transparency / 1);
        strokeWeight((this.scale * this.scale) / 4);
        this.size = this.scale * windowHeight / 200;
        circle(this.location.x, this.location.y, this.size);
    }

    update() {
        this.location.add(this.velocity);

        // Warp
        if (this.location.x > windowWidth * 1.1) {
            this.location.x = -this.size;
        }
        if (this.location.x < -this.size) {
            this.location.x = windowWidth * 1.1;
        }
        if (this.location.y > windowHeight * 1.1) {
            this.location.y = -this.size;
        }
        if (this.location.y < -this.size) {
            this.location.y = windowHeight * 1.1;
        }
    }
}

let nodes = []

function generateNodes(amount) {
    for (let i = 0; i < amount; i++) {
        nodes.push(new Node(random(0, windowWidth), random(0, windowHeight), random(200, 500)));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

    // Load nodes
    generateNodes((windowWidth * windowHeight) / 20000);
}

function draw() {
    background('#515151');

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].display();
        nodes[i].update();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    nodes = [];
    generateNodes((windowWidth * windowHeight) / 20000);
}