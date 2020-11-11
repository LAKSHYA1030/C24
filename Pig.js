class Pig {
    constructor(x,y) {
        var options = {
            'restitution': 0.1, 
            'friction': 1,
            'density': 1.5 
            }
            this.object = Bodies.rectangle(x,y,20, 20,options);
            this.width = 20;
            this.height = 20;
            World.add(world,this.object); 
            
    }
    display() {
        var angle = this.object.angle;
        push() 
        translate(this.object.position.x,this.object.position.y)
        rotate(angle) 
        fill("green")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
    
    
    }