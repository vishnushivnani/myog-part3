class Interface{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        StartButton = createButton("Start");
        StartButton.position(displayWidth/2,displayHeight-200)
      

        earth =createSprite(this.x-50,this.y-50,this.width,this.height);
        earth.addAnimation("RotatingEarth",RotatingEarth_Img);
        earth.scale = 4
       
        
        robo = createSprite(this.x-100,this.y-50,this.width*1.5,this.height*1.2);
        robo.addImage(Robo_Img)
        robo.scale = 1.5;
       
       this.bg = loadImage("Sprites/Images/EarthFiles/Space.jpg")
       
        
    }
    display(){

      
        if(frameCount%150===0){
            aestriod  = createSprite(random(100,205),random(10,400),50,50);
            aestriod.addImage(aestroid_Img);
            aestriod.velocityX = 5
            aestriod.velocityY = 5
            aestriod.scale = 0.5
            aestriod.lifetime = 200
          
        }
        if(frameCount%260 === 0){
            console.log("Ok")
            aestriod2  = createSprite(random(100,605),random(40,50),50,50);
            aestriod2.addImage(aestroid_Img);
            aestriod2.velocityX = 5
            aestriod2.velocityY = 5
            aestriod2.scale = 0.5
            aestriod2.lifetime = 200
            
        }  
         StartButton.mousePressed(() =>{  
            aestriod.visible = false;
           aestriod2.visible = false;
           this.bg.hide();
           earth.visible = false;
           robo.visible = false;
           StartButton.hide();});
   
           
            imageMode(CENTER)
            image(this.bg,this.x,this.y,this.width*3,this.height*2)
            drawSprites();
            
    }
    hide(){
        aestriod.visible = false;
        aestriod2.visible = false;
        this.bg.hide();
        earth.visible = false;
        robo.visible = false;
        StartButton.hide();
    }
    show(){
        aestriod.visible  = true;
        aestriod2.visible = true;
        this.bg.show()
        earth.visible     = true;
        robo.visible      = true;
        StartButton.show();

    }
}