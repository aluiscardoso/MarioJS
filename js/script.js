const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = new Audio('./som/gameover.m4a');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = ' ';
        mario.style.bottom = `${marioPosition}px`;
        mario.style.width = '75px'
        mario.src = './images/game-over.png'
        mario.style.marginLeft = '50px'

        gameover.volume = 0.2;
        gameover.play();        

        setTimeout(() => {
            mario.classList.add('gameover');
        }, 300);
   

        clearInterval(loop)
    }

}, 10)



document.addEventListener('keydown', jump);
