class Paper{
    constructor(x,y){
        var options={
            isStatic:false,restitution:0.4,density:0.8
        }
        this.body=Bodies.circle(x,y,20,options)
       this.radius=20
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        fill("red");
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}