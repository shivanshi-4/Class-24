class Bird{
    constructor(x,y){
        var options={
        restitution:0.8,
        friction:0.7
          }
          this.body=Bodies.rectangle(x,y,70,70,options);
          this.width=70
          this.height=70
          World.add(world,this.body);
        
    }

     display(){
         var pos=this.body.position
         pos.x=mouseX
         pos.y=mouseY
        var angle=this.body.angle
       // push ();
       // translate(pos.x,pos.y)
       // rotate(angle)
        rectMode(CENTER)
        stroke("violet")
        strokeWeight(4)
        fill ("red")
        rect(pos.x,pos.y,this.width,this.height) 
        //pop()

    }
}