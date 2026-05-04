let rects = [];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas-container");
  noStroke();

  rects = [
    {x:0, y:0, w:200, h:200, color:[255,0,0]},
    {x:200, y:0, w:300, h:150, color:[255,255,255]},
    {x:200, y:150, w:300, h:50, color:[0,0,255]},
    {x:0, y:200, w:150, h:300, color:[255,255,255]},
    {x:150, y:200, w:350, h:300, color:[255,255,0]}
  ];
}

function draw() {
  background(255);

  for (let r of rects) {

    let d = dist(mouseX, mouseY, r.x + r.w/2, r.y + r.h/2);

    let factor = map(d, 0, 200, 1.5, 1);

    fill(
      constrain(r.color[0]*factor,0,255),
      constrain(r.color[1]*factor,0,255),
      constrain(r.color[2]*factor,0,255)
    );

    rect(r.x, r.y, r.w, r.h);
  }

  stroke(0);
  strokeWeight(8);

  line(200, 0, 200, height);
  line(150, 200, 150, height);
  line(0, 200, width, 200);
  line(200, 150, width, 150);
}