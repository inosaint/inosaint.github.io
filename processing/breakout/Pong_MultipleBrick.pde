//paddle 
float px;
float py;
float paddleWidth = 200;
float paddleHeight = 10;
//ball
float cx ;
float cy ;
float cxspeed ;
float cyspeed ;
float r = 15;
//block
float blockWidth = 60;
float blockHeight = 20;
int counter = 0;
int blockLines = 5;
int blocksPerLine=10;
int [][] blockLine= new int[blockLines][blocksPerLine];
//flag
boolean stopGame= false;
//text
PFont f;      

void initial() {
  background(0);
  for (int k=0;k<blockLines;k++) {
    for (int l=0;l<blocksPerLine;l++) {
      blockLine[k][l] = floor(random(0, 3)); //brick strength
    }
  }

  cx = width/2;
  cy = height-25;

  cxspeed = 3;
  cyspeed = -10;
  
  stopGame = false;  
  counter = 0;
}

void setup() {
  size(600, 600);
  background(0);
  //f = loadFont("C:/Users/marcel/Documents/Processing/files/Pong_MultipleBrick");
  f = createFont("data/slkscr-webfont.ttf",16); //Create Font
  //f = loadFont("Silkscreen-48.vlw");
  textFont(f, 30); 
  //initial();
}

void draw() {
  
  
  background(0);
  fill(255);
  
  if(!stopGame){
  //[full] Move the ball according to its speed.
  cx = cx + cxspeed;
  cy = cy + cyspeed;

  //Check for wall bouncing.
  if ((cx+r > width) || (cx-r < 0)) {
    cxspeed = cxspeed * -1;
  }

  //paddle bouncing
  if (cy>height-2*r) {

    if (cx> px && cx < px+paddleWidth) {
      if (cx>px && (cx <(px+paddleWidth)/4) || (cx>3*(px+paddleWidth)/4) && (cx <px+paddleWidth ))
        cxspeed = cxspeed * 1;

      cyspeed = cyspeed * -1;
    }
    else {
      initial();
    }
  }

  if ((cy-r < blockHeight*blockLines)) {

    int currLine=floor((cy-r)/blockHeight);
    if (currLine>=0) { 
      for (int j=0;j<blocksPerLine;j++) {
        if ((cx >= blockWidth*j) && (cx <blockWidth*(j+1)) && (blockLine[currLine][j]>0)) {
          blockLine[currLine][j]-=1;
          cyspeed = cyspeed * -1;
        }
      }
    }
  }
  //ceiling bounce
  if (cy-r < 0) {
    cyspeed = cyspeed * -1;
  }
  //paddle
  rect(px, height-paddleHeight, paddleWidth, paddleHeight);

  //drawing bricks
  for (int i = 0; i<blockLines; i++) {
    for (int j=0;j<blocksPerLine;j++) {
      if (blockLine[i][j]==5) {
        pushStyle();
        fill(255, 0, 0);
        rect(0+blockWidth*j, 0+i*20, blockWidth, blockHeight);
        popStyle();
      }
      else if (blockLine[i][j]==4) {
        pushStyle();
        fill(230, 32, 32);
        rect(0+blockWidth*j, 0+i*20, blockWidth, blockHeight);
        popStyle();
      }
      else if (blockLine[i][j]==3) {
        pushStyle();
        fill(237, 41, 57);
        rect(0+blockWidth*j, 0+i*20, blockWidth, blockHeight);
        popStyle();
      }
      else if (blockLine[i][j]==2) {
        pushStyle();
        fill(250, 128, 114);
        rect(0+blockWidth*j, 0+i*20, blockWidth, blockHeight);
        popStyle();
      }
      else if (blockLine[i][j]==1) {
        pushStyle();
        fill(255, 192, 203);
        rect(0+blockWidth*j, 0+i*20, blockWidth, blockHeight);
        popStyle();
      }
      else if (blockLine[i][j]==0) {
        counter++;
       
      }
    }
  }
  
  }  

    if (counter == blockLines*blocksPerLine) {
      stopGame = true; 
      //initial();
    }
    else
    ellipse(cx, cy, 2*r, 2*r); //drawing ball
    
    if(stopGame && counter != 0){
                     // Specify font to be used      
      //fill(255);     // Specify font color 
      text("CONGRATULATIONS \n   Click to play again!", width/4, height/2);  // Display Text 
    }
    else if(stopGame && counter == 0)
      text("Click to play Breakout!", width/4, height/2);  // Display Text
      
    counter = 0;
  
}



void mouseMoved() {
  //paddle movement
  if (px >= 0  && px+paddleWidth<= width)
    px = mouseX;
  if (px < 0)
    px = 0;  

  if (px+paddleWidth > width)        
    px = width-paddleWidth;
}

void mousePressed() {
  //click to restart
   
  initial();
}
void keyPressed(){
//if (keyCode == ENTER) 
    //saveFrame("C:/Users/marcel/Desktop/Info Viz/image-"+int(random(100))+".png");
}


