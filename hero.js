class Hero{
    constructor(x,y,width,height){
var options={
    density:1,
    frictionAir:2
}
this.image=loadImage("Superhero-02.png")
this.body=Bodies.rectangle(x,y,width,height,options)

this.width=width
this.height=height;
World.add(world,this.body)
    }
    display(){
        
        push();
        translate(this.body.position.x,this.body.position.y)
      
       image(this.image,0,0,this.width,this.height)
        pop()
    }
}