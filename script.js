window.onload = function () { // WINDOW MINUS
    var stage = document.getElementById('stage') // DOCUMENT MAIUS
    var context = stage.getContext("2d") //ctx=Context     // OPTE POR VARIAVEIS COMEÇANDO COM MINUSC É UMA BOA PRATICA

document.addEventListener("keydown", keyPush )

    //parte grafica e visual:
    setInterval(game, 60)

    const velocidadeSnake = 1 //velocidade
    var vx = vy = 0
    var posicaoNasceCobraX = 10
    var posicaoNasceCobraY = 15 
    var  tp = 20 //tamanho da peça por quadrado
    var qp = 20 //quantidade de peças no tabuleiro
    var ax = ay = 15 //posição da maça 
    var trail = [] 
    tail = 5 
  
    function  game() {
      posicaoNasceCobraX += vx
      posicaoNasceCobraY += vy
      if (posicaoNasceCobraX <0) {
          posicaoNasceCobraX=qp-1 

        }
        if (posicaoNasceCobraX>qp-1){
            posicaoNasceCobraX=0
        }
        if (posicaoNasceCobraY<0) {
            posicaoNasceCobraY=qp-1
        }
        if (posicaoNasceCobraY>qp-1) {
            posicaoNasceCobraY=0
        }

        context.fillStyle = "#002232"
    
        context.fillRect(0, 0, stage.width, stage.height) // pintando a tela 

        context.fillStyle = "#ff674b"//cor da maça
        
        context.fillRect(ax*tp, ay*tp,  tp,tp )
        
        context.fillStyle = "#8eea80"

        for (var i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*tp, trail[i].y*tp,  tp-1,tp-1 )
            if (trail[i].x == posicaoNasceCobraX  && trail[i].y == posicaoNasceCobraY){
                vx = vy = 0
                tail = 5
            }
            
        }
        trail.push({x:posicaoNasceCobraX,y:posicaoNasceCobraY})
            while(trail.length>tail ){
                trail.shift()
            }
            if (ax==posicaoNasceCobraX && ay==posicaoNasceCobraY){
                tail++
                ax=Math.floor(Math.random()*qp)
                ay=Math.floor(Math.random()*qp)
            }
    }
     function  keyPush(event) {
         switch (event.keyCode) {
             case 37: //Left 
             vx = -velocidadeSnake 
             vy=0
                 break;
                 case 38: //up
             vx= 0 
             vy= -velocidadeSnake
                 break;
                 case 39: //right
             vx= velocidadeSnake 
             vy=0
                 break;
                 case 40: //down
             vx= 0
             vy= velocidadeSnake
                 break;
                
         
             default:
                 break;
         }

     }  
      //mobile
const up = document.getElementById('up');
up.addEventListener('click', function(){
snake.setVel(38);
});

const down = document.getElementById('down');
down.addEventListener('click', function(){
snake.setVel(40);
});

const left = document.getElementById('left');
left.addEventListener('click', function(){
snake.setVel(37);
});

const right = document.getElementById('right');
right.addEventListener('click', function(){
snake.setVel(39);
});

const restart = document.getElementById('restart');
restart.addEventListener('click', function(){
snake.setVel(32);
});


}
