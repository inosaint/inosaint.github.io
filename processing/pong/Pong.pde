//[full] Variables for location and speed of ball.
float x ;
float y ;
float xspeed = 2;
float yspeed = 3.3;
float lpx;
float lpy; //left paddle
float rpx;
float rpy; //right paddle
int rscore,lscore =0; //score
boolean flag= false;
float padSpeed = 5;
//[end]

PFont f;                          //Declare PFont variable
void initial(){
  x = width/2;
  y = height/2;
  lpx = 0;
  lpy = height/2; //left paddle
  rpx = (width-10);
  rpy = height/2; //right paddle
  yspeed = 3.3;
  xspeed = 2;
  if (flag){
      xspeed = -xspeed;
    }
  
  //[end]
}

//[full] Remember how Processing works?  setup() is executed once when the sketch starts and draw() loops forever and ever (until you quit).
void setup() {
  size(640,360);
  background(0);
  f = createFont("Arial",16,true); //Create Font
  initial();
}
//[end]

void draw() {
  background(0);
  stroke(255);
  line(width/2,0,width/2,height);//center line
  
  //[full] Move the ball according to its speed.
  x = x + xspeed;
  y = y + yspeed;
  //[end]

  //[full] Check for bouncing.
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height-15) || (y-15 < 0)) {
    yspeed = yspeed * -1;
  }
  //[end]

  stroke(0);
  fill(255);
  // Display the ball at the location (x,y).
  
  //ellipseMode(CORNER);  
  ellipse(x,y,30,30);   //ball
  
  rect(lpx,lpy,10,70); //left paddle
  
  rect(rpx,rpy,10,70); //right paddle
  
  textFont(f,50);                 // Specify font to be used
  fill(255);     // Specify font color 
  text(lscore,width/4,height/4);  // Display Text
  text(rscore,3*width/4,height/4);  // Display Text
  
  if((x-15)<10){
    if(y>lpy && y<lpy+70){
      xspeed = xspeed * -1 - xspeed*.1 ;
      //println("L Hit!"+xspeed);
      
    }
    else{
      rscore += 1;
      //println("RScore: "+rscore);
      flag = false;
      initial();
      
    }
  }  
  
  if((x+15) >(width-10)){
      
      if(y > rpy && y< rpy+70){
        xspeed = xspeed * -1 - xspeed*.1;
        //println("R Hit!"+xspeed);
      }
      else{
        lscore += 1;
        //println("LScore: "+lscore);
        flag = true;
        initial();
    } 
  }
} 

void keyPressed(){
  if(rpy>= 0  && rpy+70<= height){
    if(keyCode == UP){
      rpy = rpy-padSpeed;
      if (rpy < 0)
        rpy = 0;  
    }
    else if(keyCode == DOWN){
      rpy = rpy+padSpeed;
      if (rpy+70 > height){
        rpy = height-70;
        //println(rpy);
      }
    }
  }  
  if(lpy >= 0 && lpy+70 <= height){
   if(key == 'w' || key == 'W'){
      lpy = lpy-padSpeed;
     if (lpy < 0)
        lpy = 0;  
   }
    else if(key == 's' || key == 'S'){
      lpy = lpy+padSpeed;
      if (lpy+70 > height){
        lpy = height-70;
        //println(rpy);
      }
    }
    //else if(keyCode = )  
  }
  //if (keyCode == ENTER) 
  //  saveFrame("C:/Users/marcel/Desktop/Info Viz/image-"+int(random(100))+".png");

}






