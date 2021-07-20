// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let mobilenet;
let img;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  canvas.parent(canvasDiv);
  textDiv = createDiv();
  textP = createP("Model loading, please wait...");
  textP.parent(textDiv);
  img = loadImage("images/guinea-pig.jpg");
  img = loadImage("images/guinea-pig.jpg", imageLoaded);
  
}

function draw() {

}

function imageLoaded() {
  image(img, 0, 0, width, height);
  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
  mobilenet.classify(canvas, gotResults);
}

function modelReady() {
  mobilenet.classify(canvas, gotResults);
}

function gotResults(error, results) {
  function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    console.log(results);
  }

}
}
