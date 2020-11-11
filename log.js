class log {
    constructor(x,y,height, angle) {
        var options = {
            'restitution': 0.1, 
            'friction': 1,
            'density': 1.5
            }
            this.object = Bodies.rectangle(x,y,25,height,options);
            this.width = 25;
            this.height = height;
            World.add(world,this.object); 
            Matter.Body.setAngle(this.object,angle)
    }
    display() {
        var angle = this.object.angle;
        push() 
        translate(this.object.position.x,this.object.position.y)
        rotate(angle) 
        fill("yellow");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
    
    
    }