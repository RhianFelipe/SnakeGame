window.onload = function () { // WINDOW MINUS
    var stage = document.getElementById('stage') // DOCUMENT MAIUS
    var context = stage.getContext("2d") //ctx=Context     // OPTE POR VARIAVEIS COMEÇANDO COM MINUSC É UMA BOA PRATICA

document.addEventListener("keydown", keyPush )

    //parte grafica e visual:
    setInterval(game, 60)

    const vel = 1 //velocidade
    var vx = vy = 0
    var px  = -10
    var py = 15 
    var  tp = 20 //tamanho da peça por quadrado
    var qp = 20 //quantidade de peças no tabuleiro
    var ax = ay = 15 //posição da maça 
    var trail = [] 
    tail = 5 
  
    function  game() {
      px += vx
      py += vy
      if (px <0) {
          px=qp-1 

        }
        if (px>qp-1){
            px=0
        }
        if (py<0) {
            py=qp-1
        }
        if (py>qp-1) {
            py=0
        }

        context.fillStyle = "#002232"
    
        context.fillRect(0, 0, stage.width, stage.height) // pintando a tela 

        context.fillStyle = "#ff674b"//cor da maça
        
        context.fillRect(ax*tp, ay*tp,  tp,tp )
        
        context.fillStyle = "#8eea80"

        for (var i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*tp, trail[i].y*tp,  tp-1,tp-1 )
            if (trail[i].x == px  && trail[i].y == py){
                vx = vy = 0
                tail = 5
            }
            
        }
        trail.push({x:px,y:py})
            while(trail.length>tail ){
                trail.shift()
            }
            if (ax==px && ay==py){
                tail++
                ax=Math.floor(Math.random()*qp)
                ay=Math.floor(Math.random()*qp)
            }
    }
     function  keyPush(event) {
         switch (event.keyCode) {
             case 37: //Left 
             vx = -vel 
             vy=0
                 break;
                 case 38: //up
             vx= 0 
             vy= -vel
                 break;
                 case 39: //right
             vx= vel 
             vy=0
                 break;
                 case 40: //down
             vx= 0
             vy= vel
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
