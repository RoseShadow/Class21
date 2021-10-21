class Ground{

    constructor(x,y,w,h){

        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body)

    }


    show(){
        // name alliasing
        var pos=this.body.position;

        rectMode(CENTER);
        //push capture new setting
        push();
            fill("red");
            rect(pos.x,pos.y,this.width,this.height);
        // pop reverses it back to orignal setting
        pop();
    }

}