class BaseClass{
    constructor(radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(radius);
        this.radius = radius;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
      }
}