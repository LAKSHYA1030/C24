class box {
constructor(x,y,width,height) {
    var options = {
        'restitution': 0.1, 
        'friction': 1,
        'density': 2 
        }
        this.object = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.object); 
        
}
display() {
    var angle = this.object.angle;
    push() 
    translate(this.object.position.x,this.object.position.y)
    rotate(angle) 
    fill("brown")
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop()
}


}