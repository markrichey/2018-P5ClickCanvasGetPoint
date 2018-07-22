
let xs = [];
let ys = [];

function setup(){
    createCanvas(600,400);
    background(0);
}

function mousePressed(){
    let x = map(mouseX,0,width,0,1);
    let y = map(mouseY,0,height,1,0);
    xs.push(x);
    ys.push(y);
    draw_grid();
}

// Not draw as that gets called all the time.
function draw_grid(){
    background(0);
    stroke(255);
    strokeWeight(12);
    for(let i = 0; i < xs.length; i++){
        let px = map(xs[i],0,1,0,width);
        let py = map(ys[i],0,1,height,0);
        point(px,py);
    }
}