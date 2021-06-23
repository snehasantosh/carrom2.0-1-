class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
        
      }
      form = new Form()
      form.display();
    }

    carrom = createSprite(780,360,20,20)
    striker1 = createSprite(786,597,20,20)
    striker1.velocityX = 0
    striker1.velocityY = 0
    
//adding the striker2
    striker2 = createSprite(786,120,20,20)
    striker2.visible = false;

    wcoin1 = createSprite(760,342,20,20)
    wcoin2 = createSprite(807,356,20,20)
    wcoin3 = createSprite(772,390,20,20)
    wcoin4 = createSprite(740,321,20,20)
    wcoin5 = createSprite(795,311,20,20)
    wcoin6 = createSprite(834,348,20,20)
    wcoin7 = createSprite(816.5,402.5,20,20)
    wcoin8 = createSprite(762,417.5,20,20)
    wcoin9 = createSprite(726,376,20,20)
    bcoin1 = createSprite(789,331,20,20)
    bcoin2 = createSprite(799,379,20,20)
    bcoin3 = createSprite(754,366,20,20)
    bcoin4 = createSprite(769.5,311,20,20)
    bcoin5 = createSprite(816.5,323.5,20,20)
    bcoin6 = createSprite(828,373,20,20)
    bcoin7 = createSprite(792,406,20,20)
    bcoin8 = createSprite(744,393,20,20)
    bcoin9 = createSprite(734.5,344,20,20)
    rcoin = createSprite(783,361,20,20)
    hole = createSprite(1080,50,20,20)
    hole2 = createSprite(480,50,20,20)
    hole3 = createSprite(480,660,20,20)
    hole4 = createSprite(1080,660,20,20)
    invisible1 = createSprite(445,360,20,680)
    invisible2 = createSprite(790,696.2,680,20)
    invisible3 = createSprite(1115,369.2,20,680)
    invisible4 = createSprite(790,24.2,680,20)


    
  }

  play(){
    
    form.hide();
    Player.getPlayerInfo();
    background(0)
   
   


    carrom.addImage(carromboardImage)
    carrom.scale = 0.72;
  
    
    striker1.addImage(strikerImage)
    striker1.scale = 0.03
    striker1.setCollider("circle",10,-10,700)
    striker1.friction = 0.02
    striker1.depth = carrom.depth;
    striker1.depth = striker1.depth+1
 
    striker1.bounce(wcoin1)
    striker1.bounce(wcoin2)
    striker1.bounce(wcoin3)
    striker1.bounce(wcoin4)
    striker1.bounce(wcoin5)
    striker1.bounce(wcoin6)
    striker1.bounce(wcoin7)
    striker1.bounce(wcoin8)
    striker1.bounce(wcoin9)
    striker1.bounce(bcoin1)
    striker1.bounce(bcoin2)
    striker1.bounce(bcoin3)
    striker1.bounce(bcoin4)
    striker1.bounce(bcoin5)
    striker1.bounce(bcoin6)
    striker1.bounce(bcoin7)
    striker1.bounce(bcoin8)
    striker1.bounce(bcoin9)
    striker1.bounce(rcoin)
    striker1.bounceOff(invisible1)
    striker1.bounceOff(invisible2)
    striker1.bounceOff(invisible3)
    striker1.bounceOff(invisible4)
  
    striker2.addImage(strikerImage)
    striker2.scale = 0.03
    striker2.setCollider("circle",10,-10,700)
    striker2.friction = 0.02
    striker2.depth = carrom.depth;
    striker2.depth = striker1.depth+1
   
    striker2.bounce(wcoin1)
    striker2.bounce(wcoin2)
    striker2.bounce(wcoin3)
    striker2.bounce(wcoin4)
    striker2.bounce(wcoin5)
    striker2.bounce(wcoin6)
    striker2.bounce(wcoin7)
    striker2.bounce(wcoin8)
    striker2.bounce(wcoin9)
    striker2.bounce(bcoin1)
    striker2.bounce(bcoin2)
    striker2.bounce(bcoin3)
    striker2.bounce(bcoin4)
    striker2.bounce(bcoin5)
    striker2.bounce(bcoin6)
    striker2.bounce(bcoin7)
    striker2.bounce(bcoin8)
    striker2.bounce(bcoin9)
    striker2.bounce(rcoin)
    striker2.bounceOff(invisible1)
    striker2.bounceOff(invisible2)
    striker2.bounceOff(invisible3)
    striker2.bounceOff(invisible4)
  
    wcoin1.addImage(wcoinImage)
    wcoin1.scale = 0.095
    wcoin1.friction = 0.02
    wcoin1.setCollider("circle",10,-10,150)
    wcoin1.bounce(bcoin1)
    wcoin1.bounce(bcoin2)
    wcoin1.bounce(bcoin3)
    wcoin1.bounce(bcoin4)
    wcoin1.bounce(bcoin5)
    wcoin1.bounce(bcoin6)
    wcoin1.bounce(bcoin7)
    wcoin1.bounce(bcoin8)
    wcoin1.bounce(bcoin9)
    wcoin1.bounce(wcoin2)
    wcoin1.bounce(wcoin3)
    wcoin1.bounce(wcoin4)
    wcoin1.bounce(wcoin5)
    wcoin1.bounce(wcoin6)
    wcoin1.bounce(wcoin7)
    wcoin1.bounce(wcoin8)
    wcoin1.bounce(wcoin9)
    wcoin1.bounce(rcoin)
    wcoin1.bounce(striker1)
    wcoin1.bounceOff(invisible1)
    wcoin1.bounceOff(invisible2)
    wcoin1.bounceOff(invisible3)
    wcoin1.bounceOff(invisible4)
    
  
    wcoin2.addImage(wcoinImage)
    wcoin2.scale = 0.095
    wcoin2.friction = 0.02
    wcoin2.setCollider("circle",10,-10,150)
    wcoin2.bounce(bcoin1)
    wcoin2.bounce(bcoin2)
    wcoin2.bounce(bcoin3)
    wcoin2.bounce(bcoin4)
    wcoin2.bounce(bcoin5)
    wcoin2.bounce(bcoin6)
    wcoin2.bounce(bcoin7)
    wcoin2.bounce(bcoin8)
    wcoin2.bounce(bcoin9)
    wcoin2.bounce(wcoin1)
    wcoin2.bounce(wcoin3)
    wcoin2.bounce(wcoin4)
    wcoin2.bounce(wcoin5)
    wcoin2.bounce(wcoin6)
    wcoin2.bounce(wcoin7)
    wcoin2.bounce(wcoin8)
    wcoin2.bounce(wcoin9)
    wcoin2.bounce(rcoin)
    wcoin2.bounce(striker1)
    wcoin2.bounceOff(invisible1)
    wcoin2.bounceOff(invisible2)
    wcoin2.bounceOff(invisible3)
    wcoin2.bounceOff(invisible4)
    
  
    wcoin3.addImage(wcoinImage)
    wcoin3.scale = 0.095
    wcoin3.friction = 0.02
    wcoin3.setCollider("circle",10,-10,150)
    wcoin3.bounce(bcoin1)
    wcoin3.bounce(bcoin2)
    wcoin3.bounce(bcoin3)
    wcoin3.bounce(bcoin4)
    wcoin3.bounce(bcoin5)
    wcoin3.bounce(bcoin6)
    wcoin3.bounce(bcoin7)
    wcoin3.bounce(bcoin8)
    wcoin3.bounce(bcoin9)
    wcoin3.bounce(wcoin1)
    wcoin3.bounce(wcoin2)
    wcoin3.bounce(wcoin4)
    wcoin3.bounce(wcoin5)
    wcoin3.bounce(wcoin6)
    wcoin3.bounce(wcoin7)
    wcoin3.bounce(wcoin8)
    wcoin3.bounce(wcoin9)
    wcoin3.bounce(rcoin)
    wcoin3.bounce(striker1)
    wcoin3.bounceOff(invisible1)
    wcoin3.bounceOff(invisible2)
    wcoin3.bounceOff(invisible3)
    wcoin3.bounceOff(invisible4)
  
    wcoin4.addImage(wcoinImage)
    wcoin4.scale = 0.095
    wcoin4.friction = 0.02
    wcoin4.setCollider("circle",10,-10,150)
    wcoin4.bounce(bcoin1)
    wcoin4.bounce(bcoin2)
    wcoin4.bounce(bcoin3)
    wcoin4.bounce(bcoin4)
    wcoin4.bounce(bcoin5)
    wcoin4.bounce(bcoin6)
    wcoin4.bounce(bcoin7)
    wcoin4.bounce(bcoin8)
    wcoin4.bounce(bcoin9)
    wcoin4.bounce(wcoin1)
    wcoin4.bounce(wcoin2)
    wcoin4.bounce(wcoin3)
    wcoin4.bounce(wcoin5)
    wcoin4.bounce(wcoin6)
    wcoin4.bounce(wcoin7)
    wcoin4.bounce(wcoin8)
    wcoin4.bounce(wcoin9)
    wcoin4.bounce(rcoin)
    wcoin4.bounce(striker1)
    wcoin4.bounceOff(invisible1)
    wcoin4.bounceOff(invisible2)
    wcoin4.bounceOff(invisible3)
    wcoin4.bounceOff(invisible4)
   
    wcoin5.addImage(wcoinImage)
    wcoin5.scale = 0.095
    wcoin5.friction = 0.02
    wcoin5.setCollider("circle",10,-10,150)
    wcoin5.bounce(bcoin1)
    wcoin5.bounce(bcoin2)
    wcoin5.bounce(bcoin3)
    wcoin5.bounce(bcoin4)
    wcoin5.bounce(bcoin5)
    wcoin5.bounce(bcoin6)
    wcoin5.bounce(bcoin7)
    wcoin5.bounce(bcoin8)
    wcoin5.bounce(bcoin9)
    wcoin5.bounce(wcoin1)
    wcoin5.bounce(wcoin2)
    wcoin5.bounce(wcoin3)
    wcoin5.bounce(wcoin4)
    wcoin5.bounce(wcoin6)
    wcoin5.bounce(wcoin7)
    wcoin5.bounce(wcoin8)
    wcoin5.bounce(wcoin9)
    wcoin5.bounce(rcoin)
    wcoin5.bounce(striker1)
    wcoin5.bounceOff(invisible1)
    wcoin5.bounceOff(invisible2)
    wcoin5.bounceOff(invisible3)
    wcoin5.bounceOff(invisible4)
    
  
    wcoin6.addImage(wcoinImage)
    wcoin6.scale = 0.095
    wcoin6.friction = 0.02
    wcoin6.setCollider("circle",10,-10,150)
    wcoin6.bounce(bcoin1)
    wcoin6.bounce(bcoin2)
    wcoin6.bounce(bcoin3)
    wcoin6.bounce(bcoin4)
    wcoin6.bounce(bcoin5)
    wcoin6.bounce(bcoin6)
    wcoin6.bounce(bcoin7)
    wcoin6.bounce(bcoin8)
    wcoin6.bounce(bcoin9)
    wcoin6.bounce(wcoin1)
    wcoin6.bounce(wcoin2)
    wcoin6.bounce(wcoin3)
    wcoin6.bounce(wcoin4)
    wcoin6.bounce(wcoin5)
    wcoin6.bounce(wcoin7)
    wcoin6.bounce(wcoin8)
    wcoin6.bounce(wcoin9)
    wcoin6.bounce(rcoin)
    wcoin6.bounce(striker1)
    wcoin6.bounceOff(invisible1)
    wcoin6.bounceOff(invisible2)
    wcoin6.bounceOff(invisible3)
    wcoin6.bounceOff(invisible4)
    
  
    wcoin7.addImage(wcoinImage)
    wcoin7.scale = 0.095
    wcoin7.friction = 0.02
    wcoin7.setCollider("circle",10,-10,150)
    wcoin7.bounce(bcoin1)
    wcoin7.bounce(bcoin2)
    wcoin7.bounce(bcoin3)
    wcoin7.bounce(bcoin4)
    wcoin7.bounce(bcoin5)
    wcoin7.bounce(bcoin6)
    wcoin7.bounce(bcoin7)
    wcoin7.bounce(bcoin8)
    wcoin7.bounce(bcoin9)
    wcoin7.bounce(wcoin1)
    wcoin7.bounce(wcoin2)
    wcoin7.bounce(wcoin3)
    wcoin7.bounce(wcoin4)
    wcoin7.bounce(wcoin5)
    wcoin7.bounce(wcoin6)
    wcoin7.bounce(wcoin8)
    wcoin7.bounce(wcoin9)
    wcoin7.bounce(rcoin)
    wcoin7.bounce(striker1)
    wcoin7.bounceOff(invisible1)
    wcoin7.bounceOff(invisible2)
    wcoin7.bounceOff(invisible3)
    wcoin7.bounceOff(invisible4)
  
    wcoin8.addImage(wcoinImage)
    wcoin8.scale = 0.095
    wcoin8.friction = 0.02
    wcoin8.setCollider("circle",10,-10,150)
    wcoin8.bounce(bcoin1)
    wcoin8.bounce(bcoin2)
    wcoin8.bounce(bcoin3)
    wcoin8.bounce(bcoin4)
    wcoin8.bounce(bcoin5)
    wcoin8.bounce(bcoin6)
    wcoin8.bounce(bcoin7)
    wcoin8.bounce(bcoin8)
    wcoin8.bounce(bcoin9)
    wcoin8.bounce(wcoin1)
    wcoin8.bounce(wcoin2)
    wcoin8.bounce(wcoin3)
    wcoin8.bounce(wcoin4)
    wcoin8.bounce(wcoin5)
    wcoin8.bounce(wcoin6)
    wcoin8.bounce(wcoin7)
    wcoin8.bounce(wcoin9)
    wcoin8.bounce(rcoin)
    wcoin8.bounce(striker1)
    wcoin8.bounceOff(invisible1)
    wcoin8.bounceOff(invisible2)
    wcoin8.bounceOff(invisible3)
    wcoin8.bounceOff(invisible4)
    
    
    wcoin9.addImage(wcoinImage)
    wcoin9.scale = 0.095
    wcoin9.friction = 0.02
    wcoin9.setCollider("circle",10,-10,150)
    wcoin9.bounce(bcoin1)
    wcoin9.bounce(bcoin2)
    wcoin9.bounce(bcoin3)
    wcoin9.bounce(bcoin4)
    wcoin9.bounce(bcoin5)
    wcoin9.bounce(bcoin6)
    wcoin9.bounce(bcoin7)
    wcoin9.bounce(bcoin8)
    wcoin9.bounce(bcoin9)
    wcoin9.bounce(wcoin1)
    wcoin9.bounce(wcoin2)
    wcoin9.bounce(wcoin3)
    wcoin9.bounce(wcoin4)
    wcoin9.bounce(wcoin5)
    wcoin9.bounce(wcoin6)
    wcoin9.bounce(wcoin7)
    wcoin9.bounce(wcoin8)
    wcoin9.bounce(rcoin)
    wcoin9.bounce(striker1)
    wcoin9.bounceOff(invisible1)
    wcoin9.bounceOff(invisible2)
    wcoin9.bounceOff(invisible3)
    wcoin9.bounceOff(invisible4)
   
    
    bcoin1.addImage(bcoinImage)
    bcoin1.scale = 0.172
    bcoin1.friction = 0.02
    bcoin1.setCollider("circle",-6,9,80)
    bcoin1.bounce(wcoin1)
    bcoin1.bounce(wcoin2)
    bcoin1.bounce(wcoin3)
    bcoin1.bounce(wcoin4)
    bcoin1.bounce(wcoin5)
    bcoin1.bounce(wcoin6)
    bcoin1.bounce(wcoin7)
    bcoin1.bounce(wcoin8)
    bcoin1.bounce(wcoin9)
    bcoin1.bounce(bcoin2)
    bcoin1.bounce(bcoin3)
    bcoin1.bounce(bcoin4)
    bcoin1.bounce(bcoin5)
    bcoin1.bounce(bcoin6)
    bcoin1.bounce(bcoin7)
    bcoin1.bounce(bcoin8)
    bcoin1.bounce(bcoin9)
    bcoin1.bounce(rcoin)
    bcoin1.bounce(striker1)
    bcoin1.bounceOff(invisible1)
    bcoin1.bounceOff(invisible2)
    bcoin1.bounceOff(invisible3)
    bcoin1.bounceOff(invisible4)
    
    bcoin2.addImage(bcoinImage)
    bcoin2.scale = 0.172
    bcoin2.friction = 0.02
    bcoin2.setCollider("circle",-6,9,80)
    bcoin2.bounce(wcoin1)
    bcoin2.bounce(wcoin2)
    bcoin2.bounce(wcoin3)
    bcoin2.bounce(wcoin4)
    bcoin2.bounce(wcoin5)
    bcoin2.bounce(wcoin6)
    bcoin2.bounce(wcoin7)
    bcoin2.bounce(wcoin8)
    bcoin2.bounce(wcoin9)
    bcoin2.bounce(bcoin1)
    bcoin2.bounce(bcoin3)
    bcoin2.bounce(bcoin4)
    bcoin2.bounce(bcoin5)
    bcoin2.bounce(bcoin6)
    bcoin2.bounce(bcoin7)
    bcoin2.bounce(bcoin8)
    bcoin2.bounce(bcoin9)
    bcoin2.bounce(rcoin)
    bcoin2.bounce(striker1)
    bcoin2.bounceOff(invisible1)
    bcoin2.bounceOff(invisible2)
    bcoin2.bounceOff(invisible3)
    bcoin2.bounceOff(invisible4)
    bcoin2.debug = false
    
    bcoin3.addImage(bcoinImage)
    bcoin3.scale = 0.172
    bcoin3.friction = 0.02
    bcoin3.setCollider("circle",-6,9,80)
    bcoin3.bounce(wcoin1)
    bcoin3.bounce(wcoin2)
    bcoin3.bounce(wcoin3)
    bcoin3.bounce(wcoin4)
    bcoin3.bounce(wcoin5)
    bcoin3.bounce(wcoin6)
    bcoin3.bounce(wcoin7)
    bcoin3.bounce(wcoin8)
    bcoin3.bounce(wcoin9)
    bcoin3.bounce(bcoin1)
    bcoin3.bounce(bcoin2)
    bcoin3.bounce(bcoin4)
    bcoin3.bounce(bcoin5)
    bcoin3.bounce(bcoin6)
    bcoin3.bounce(bcoin7)
    bcoin3.bounce(bcoin8)
    bcoin3.bounce(bcoin9)
    bcoin3.bounce(rcoin)
    bcoin3.bounce(striker1)
    bcoin3.bounceOff(invisible1)
    bcoin3.bounceOff(invisible2)
    bcoin3.bounceOff(invisible3)
    bcoin3.bounceOff(invisible4)
    
    
    bcoin4.addImage(bcoinImage)
    bcoin4.scale = 0.172
    bcoin4.friction = 0.02
    bcoin4.setCollider("circle",-6,9,80)
    bcoin4.bounce(wcoin1)
    bcoin4.bounce(wcoin2)
    bcoin4.bounce(wcoin3)
    bcoin4.bounce(wcoin4)
    bcoin4.bounce(wcoin5)
    bcoin4.bounce(wcoin6)
    bcoin4.bounce(wcoin7)
    bcoin4.bounce(wcoin8)
    bcoin4.bounce(wcoin9)
    bcoin4.bounce(bcoin1)
    bcoin4.bounce(bcoin2)
    bcoin4.bounce(bcoin3)
    bcoin4.bounce(bcoin5)
    bcoin4.bounce(bcoin6)
    bcoin4.bounce(bcoin7)
    bcoin4.bounce(bcoin8)
    bcoin4.bounce(bcoin9)
    bcoin4.bounce(rcoin)
    bcoin4.bounce(striker1)
    bcoin4.bounceOff(invisible1)
    bcoin4.bounceOff(invisible2)
    bcoin4.bounceOff(invisible3)
    bcoin4.bounceOff(invisible4)
  
    bcoin5.addImage(bcoinImage)
    bcoin5.scale = 0.172
    bcoin5.friction = 0.02
    bcoin5.setCollider("circle",-6,9,80)
    bcoin5.bounce(wcoin1)
    bcoin5.bounce(wcoin2)
    bcoin5.bounce(wcoin3)
    bcoin5.bounce(wcoin4)
    bcoin5.bounce(wcoin5)
    bcoin5.bounce(wcoin6)
    bcoin5.bounce(wcoin7)
    bcoin5.bounce(wcoin8)
    bcoin5.bounce(wcoin9)
    bcoin5.bounce(bcoin1)
    bcoin5.bounce(bcoin2)
    bcoin5.bounce(bcoin3)
    bcoin5.bounce(bcoin4)
    bcoin5.bounce(bcoin6)
    bcoin5.bounce(bcoin7)
    bcoin5.bounce(bcoin8)
    bcoin5.bounce(bcoin9)
    bcoin5.bounce(rcoin)
    bcoin5.bounce(striker1)
    bcoin5.bounceOff(invisible1)
    bcoin5.bounceOff(invisible2)
    bcoin5.bounceOff(invisible3)
    bcoin5.bounceOff(invisible4)
  
    bcoin6.addImage(bcoinImage)
    bcoin6.scale = 0.172
    bcoin6.friction = 0.02
    bcoin6.setCollider("circle",-6,9,80)
    bcoin6.bounce(wcoin1)
    bcoin6.bounce(wcoin2)
    bcoin6.bounce(wcoin3)
    bcoin6.bounce(wcoin4)
    bcoin6.bounce(wcoin5)
    bcoin6.bounce(wcoin6)
    bcoin6.bounce(wcoin7)
    bcoin6.bounce(wcoin8)
    bcoin6.bounce(wcoin9)
    bcoin6.bounce(bcoin1)
    bcoin6.bounce(bcoin2)
    bcoin6.bounce(bcoin3)
    bcoin6.bounce(bcoin4)
    bcoin6.bounce(bcoin5)
    bcoin6.bounce(bcoin7)
    bcoin6.bounce(bcoin8)
    bcoin6.bounce(bcoin9)
    bcoin6.bounce(rcoin)
    bcoin6.bounce(striker1)
    bcoin6.bounceOff(invisible1)
    bcoin6.bounceOff(invisible2)
    bcoin6.bounceOff(invisible3)
    bcoin6.bounceOff(invisible4)
   
  
    bcoin7.addImage(bcoinImage)
    bcoin7.scale = 0.172
    bcoin7.friction = 0.02
    bcoin7.setCollider("circle",-6,9,80)
    bcoin7.bounce(wcoin1)
    bcoin7.bounce(wcoin2)
    bcoin7.bounce(wcoin3)
    bcoin7.bounce(wcoin4)
    bcoin7.bounce(wcoin5)
    bcoin7.bounce(wcoin6)
    bcoin7.bounce(wcoin7)
    bcoin7.bounce(wcoin8)
    bcoin7.bounce(wcoin9)
    bcoin7.bounce(bcoin1)
    bcoin7.bounce(bcoin2)
    bcoin7.bounce(bcoin3)
    bcoin7.bounce(bcoin4)
    bcoin7.bounce(bcoin5)
    bcoin7.bounce(bcoin6)
    bcoin7.bounce(bcoin8)
    bcoin7.bounce(bcoin9)
    bcoin7.bounce(rcoin)
    bcoin7.bounce(striker1)
    bcoin7.bounceOff(invisible1)
    bcoin7.bounceOff(invisible2)
    bcoin7.bounceOff(invisible3)
    bcoin7.bounceOff(invisible4)
    
  
    bcoin8.addImage(bcoinImage)
    bcoin8.scale = 0.172
    bcoin8.friction = 0.02
    bcoin8.setCollider("circle",-6,9,80)
    bcoin8.bounce(wcoin1)
    bcoin8.bounce(wcoin2)
    bcoin8.bounce(wcoin3)
    bcoin8.bounce(wcoin4)
    bcoin8.bounce(wcoin5)
    bcoin8.bounce(wcoin6)
    bcoin8.bounce(wcoin7)
    bcoin8.bounce(wcoin8)
    bcoin8.bounce(wcoin9)
    bcoin8.bounce(bcoin1)
    bcoin8.bounce(bcoin2)
    bcoin8.bounce(bcoin3)
    bcoin8.bounce(bcoin4)
    bcoin8.bounce(bcoin5)
    bcoin8.bounce(bcoin6)
    bcoin8.bounce(bcoin7)
    bcoin8.bounce(bcoin9)
    bcoin8.bounce(rcoin)
    bcoin8.bounce(striker1)
    bcoin8.bounceOff(invisible1)
    bcoin8.bounceOff(invisible2)
    bcoin8.bounceOff(invisible3)
    bcoin8.bounceOff(invisible4)
  
    bcoin9.addImage(bcoinImage)
    bcoin9.scale = 0.172
    bcoin9.friction = 0.02
    bcoin9.setCollider("circle",-6,9,80)
    bcoin9.bounce(wcoin1)
    bcoin9.bounce(wcoin2)
    bcoin9.bounce(wcoin3)
    bcoin9.bounce(wcoin4)
    bcoin9.bounce(wcoin5)
    bcoin9.bounce(wcoin6)
    bcoin9.bounce(wcoin7)
    bcoin9.bounce(wcoin8)
    bcoin9.bounce(wcoin9)
    bcoin9.bounce(bcoin1)
    bcoin9.bounce(bcoin2)
    bcoin9.bounce(bcoin3)
    bcoin9.bounce(bcoin4)
    bcoin9.bounce(bcoin5)
    bcoin9.bounce(bcoin6)
    bcoin9.bounce(bcoin7)
    bcoin9.bounce(bcoin8)
    bcoin9.bounce(rcoin)
    bcoin9.bounce(striker1)
    bcoin9.bounceOff(invisible1)
    bcoin9.bounceOff(invisible2)
    bcoin9.bounceOff(invisible3)
    bcoin9.bounceOff(invisible4)
    
    rcoin.addImage(rcoinImage)
    rcoin.scale = 0.12
    rcoin.friction = 0.02
    rcoin.setCollider("circle",-20,-10,125)
    rcoin.bounce(bcoin1)
    rcoin.bounce(bcoin2)
    rcoin.bounce(bcoin3)
    rcoin.bounce(bcoin4)
    rcoin.bounce(bcoin5)
    rcoin.bounce(bcoin6)
    rcoin.bounce(bcoin7)
    rcoin.bounce(bcoin8)
    rcoin.bounce(bcoin9)
    rcoin.bounce(wcoin1)
    rcoin.bounce(wcoin2)
    rcoin.bounce(wcoin3)
    rcoin.bounce(wcoin4)
    rcoin.bounce(wcoin5)
    rcoin.bounce(wcoin6)
    rcoin.bounce(wcoin7)
    rcoin.bounce(wcoin8)
    rcoin.bounce(wcoin9)
    rcoin.bounce(striker1)
    rcoin.bounceOff(invisible1)
    rcoin.bounceOff(invisible2)
    rcoin.bounceOff(invisible3)
    rcoin.bounceOff(invisible4)
  
    invisible1.visible = false
    invisible2.visible = false
    invisible3.visible = false
    invisible4.visible = false
    
    
    hole.visible = false
    hole.setCollider("circle",0,0,10)
    
    hole2.visible = false
    hole2.setCollider("circle",0,0,10)
  
    hole3.visible = false
    hole3.setCollider("circle",0,0,10)
  
    hole4.visible = false
    hole4.setCollider("circle",0,0,10)
  
    if(bcoin6.isTouching(hole4)){
      bcoin6.destroy();
    }
  
    if(wcoin3.isTouching(hole2)){
      wcoin3.destroy();
    }
   
    
    

//movemt of strikers
/*if(mousePressedOver(striker1) && striker1.y>=597){
  striker1.velocityY = -25
  striker1.velocityX = 20}*/
  

  if(striker1.x<580 && striker1.y>=597){
    striker1.x=580;
  }

  if(striker1.x>980 &&   striker1.y>=597){
    striker1.x=980;
  }

  if(striker1.y>597){
    striker1.y=597;
  }

  if(striker2.x<580 ){
    striker2.x=580;
  }

  if(striker2.x>980){
    striker2.x=980;
  }
  
  if( keyDown("LEFT_ARROW") ){

    striker1.x -= 4
    striker2.x -= 4
  }  
 
  if( keyDown("RIGHT_ARROW") ){

    striker1.x += 4
    striker2.x += 4
  } 

  if (mouseIsOver(striker1) && striker1.y>=597){
    cursor('grab');
    text("Its your turn "+ player.name, 110,221)
  }else{
    cursor(ARROW);
  }

 
//movemment of striker1

  
   if(mousePressedOver(striker1)&&striker1.x<780 && striker1.y>=597){
    striker1.velocityX=20;
    striker1.velocityY=-40;
    flag=1
  }else if(mousePressedOver(striker1)&&striker1.x>780 && striker1.y>=597){
    striker1.velocityX=-20;
    striker1.velocityY=-18;
    flag=1
  }else if(keyDown(UP_ARROW)){
    striker1.velocityY=-18;
    flag=1;
  }

if(flag===1){
  count++;
}
 if(count===200){
  striker1.visible=false;
  striker2.visible=true;
  striker2.x=786;
  striker2.y=120;
 }




drawSprites();
console.log(count)


}

}