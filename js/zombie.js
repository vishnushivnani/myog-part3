class Zombie{
    constructor(x,y){
        this.x = x;
        this.y = y
        zombieM = createSprite(this.x,this.y,20,20);
        zombieM.scale= 0.3

       zombieM.addAnimation("Idle",ZombieM_Img);
       zombieM.addAnimation("attack",ZombieM_Attack);
       zombieM.addAnimation("dead",ZombieM_Dead);
       zombieM.addAnimation("walk",ZombieM_Walk);
       

    }
    walk(){
        zombieM.changeAnimation("walk",ZombieM_Walk);
    }
    attack(){
        zombieM.changeAnimation("attack",ZombieM_Attack);
    }
    dead(){
        zombieM.changeAnimation("dead",ZombieM_Dead);
    }
    idle(){
        zombieM.changeAnimation("Idle",ZombieM_Img);
    }
    run(){
        zombieM.velocityX = -7
    }
    resetPosition(){
        zombieM.x =this.x
        zombieM.y = this.y
    }
}