let mapimage
let topleftimage
let rightimage
let bottomimage
let boatslider
let planeslider
let satteliteslider
let stars
let font
let starbutton
let starimage = false
let planeimage
let shipimage
let satteliteimage

let boatbutton

let showText = true;
//let moon

function preload() {
  font = loadFont('assets/font.otf');
 //moon = load ('assets/moon.obj', true);
}




function starinfo() {
starimage = !starimage
}

boatbutton.mousePressed = function boatinfo() {
        
}


function setup() {
  createCanvas(400, 400);
  createCanvas(1900,1620, WEBGL);

 // starbutton = createButton('Click me!')
 // starbutton.position (500,10)

  planebutton = createButton('Info!')
  planebutton.position (1110,390)

  
  sattelitebutton = createButton('Info!')
  sattelitebutton.position (910,590)

 

  textFont(font);
  textSize(width / 14);
  textSize(height / 20)
  textAlign(CENTER, CENTER);
  

  starimage = loadImage ('assets/portrait.png')
  mapimage = loadImage ('assets/map.png')
  stars= loadImage ('assets/stars.png')
  planeimage = loadImage ('assets/plane.png')
  shipimage = loadImage ('assets/ship.png')
  satteliteimage = loadImage ('assets/sattelite.png')
  topleftimage = loadImage ('assets/topleftmap.png')
  rightimage = loadImage ('assets/rightpiece.png')
  bottomimage = loadImage ('assets/bottompiece.png')
  boatslider = createSlider (-319, -390, -319)
  boatslider.position(680,100)
  planeslider = createSlider (-2, -100, -2)
  planeslider.position(1200,298)
  planeslider.style("transform", "rotate(-90deg)");
  satteliteslider = createSlider (-700, -800, -700)
  satteliteslider.position(650,598)
 
}


function draw() {
  
  image (stars, -600,-800)
  boatbutton = createButton('Info!')
  boatbutton.position (890,220,)
  image (mapimage,-275,-720)
 // image (starimage, 200,-400)

 
  
//model(moon)
 image (topleftimage, boatslider.value(),-817)
  image (shipimage,-150,-640,100,100)
 image (rightimage,-95,-700 /*+ planeslider.value()*/)
 image (planeimage, 143, -500,80,80)
  image (bottomimage,-294,-526)
  image (satteliteimage,-90,-300,90,90)
  

 fill (225,124,40)
rect (500,160,500,-1000)
rect (-1000,160,500,-1000)


fill (80,225,185)


  text('Feeling Lied To?', 0, -770);

  text('We Offer You The Truth', 0, -70)

  fill( 200,150,20)
  text('---Flat Earth Associates---', 0, 90)
/*
  fill (0,0,0)
  push ()
  textSize(width / 26);
  textSize(height / 45)
  textAlign(TOP, LEFT)
  text('Nautical navigation relies on the ', -945,-760)
 text(" blank      A majority of people also ",-945,-720)
 text("notice the curvature while at deep sea.",-945, -680)
pop()
 push()
 textSize(width / 26);
 textSize(height / 45)
 textAlign(TOP, LEFT)
 text('Airplanes are able to go in different   ', 505,-760)
text(" directions around the globe. If their  ",500,-720)
text("routes were translated onto this map, ",505, -680)
text("the distances would be hours longer.",505,-640)
 pop()



 push()
 textSize(width / 26);
 textSize(height / 45)
 textAlign(TOP, LEFT)
 text('If the Earth was a disk, we would not  ', -945,-520)
text(" observe different stars from different   ",-950,-480)
text("countries at the same time. ",-945, -440)
text("With a spherical planet, our view gets  ",-945,-400)
text('cut off depending on what hemisphere  ', -945,-360)
text(" yu are viewing from. On a disk, all places  ",-950,-320)
text("located on the top side would have the ",-945, -280) 
text("same view. ",-945, -240) 
pop()

push()
 textSize(width / 26);
 textSize(height / 45)
 textAlign(TOP, LEFT)
 text('If we were on a disk, and the moon  ', 505,-520)
text("was close above us, we would observe  ",505,-480)
text("the moon differently depending on   ",505, -440)
text("what country we were in.  ",505,-400)
text('In reality, the Earth and Moon are both  ', 505,-360)
text(" spherical objects which are tidally  ",500,-320)
text("locked in position. This is why we see  ",505, -280) 
text("same face of the moon all over the  ",505, -240) 
text("Earth, all year round.",505, -200) 
pop()


 push()
 textSize(width / 26);
 textSize(height / 45)
 textAlign(TOP, LEFT)
 text('If we live on a flat plane, we would only   ', -945,-160)
text(" need 2 or 3 sattelites for a positioning  ",-950,-120)
text("system that covers the entire Earth. ",-945, -80)
text("With a spherical planet, signals get cut  ",-945,-40)
text('off at certain distances. We need at least  ', -945,00)
text(" 24 to transmit flat-earth propoganda  ",-950,35)
text("world-wide. ",-945, 70) 
pop()
*/

fill (frameCount,100, 100)
translate (-480,-750)
quad (100,50,50,20,30,20,10,10)


//circle (0,-450,500)

}