var angle = 0.2;
var offset = 1080/2
var offset2 = 720/2
var scalar = 0.5;
var speed = 1.2;
var hue = 0
var sat = 15
var bri = 50
var size = 7


function setup() {
createCanvas(1080,720);
angleMode(DEGREES);
colorMode(HSB,360);
background(360,0,0)
fetch('http://localhost:8408/json').then(function(res) {
    return res.json()
}).then(function(jsonfile) {
    console.log(jsonfile)
    var square = int(sqrt(jsonfile.length))+1
    for (var i = 0; i < jsonfile.length; i++) {

        var HUE =jsonfile[i].energy*100 + 145
        var SAT =300
        var BRI = 360
        
        // stroke(HUE, SAT, BRI)
        // point(i%square, int(i/square))
        // point(i%square+1, int(i/square))
        // point(i%square, int(i/square+1))
        // point(i%square+1, int(i/square+1))

        var x = offset + cos(angle) * scalar 
        var y = offset2 + sin(angle) * scalar 
        fill(HUE, SAT, BRI);
        noStroke();
        ellipse(x, y, size, size);
        angle += 70.1;
        scalar += 0.30;
        size += 0.02
    }

})

}

function draw() {
    

    
}
function mouseClicked() {
    if(mouseX >=500 && mouseY>=320 && mouseX <= 580 && mouseY <= 400){
        saveCanvas('Energy Profile', 'jpg');}
    

}
