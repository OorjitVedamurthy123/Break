class Obstacle extends BaseClass{
  constructor(x,y){
    
    super(x,y,70,70);
    this.image = loadImage("wood.PNG");
    this.visibility = 255;
  }
  display(){
    if(this.body.speed<4){
      super.display();
      }
      else{
    
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
        pop();
      }
  }
} 