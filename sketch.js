function setup() {
  createCanvas(400, 400);
}
let xJogador1 = 0;
let xJogador2 = 0;

function draw() {
  background("green");
  textSize(40)
  text("😁",xJogador1, 100)
  text("🙄",xJogador2, 200,)
  rect(350,0,10,400)
  xJogador1 = xJogador1 + random(5);
  xJogador2 = xJogador2 + random(5);
 if (xJogador1 >350) { 
 text ("jogador 1 venceu!", 50, 200);
   noLoop();
 }
  if (xJogador2 >350) {
    text ("jogador 2 venceu!", 50, 200);
    noLoop(); 
  }
  
  
}