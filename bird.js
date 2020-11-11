class bird {
    constructor(x,y) {
        var options = {
            'restitution': 0.1, 
            'friction': 1,
            'density': 1 
            }
            this.object = Bodies.rectangle(x,y,20, 20,options);
            this.width = 20;
            this.height = 20;
            World.add(world,this.object); 
            
    }
    display() {
        this.object.position.x = mouseX;
        this.object.position.y = mouseY;
        var angle = this.object.angle;
        push() 
        translate(this.object.position.x,this.object.position.y)
        rotate(angle) 
        fill("red")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
    
    
    }