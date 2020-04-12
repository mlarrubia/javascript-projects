const KEY_BUTTONS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
}

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const GAME_STATE = {
    playerX: 0,
    playerY: 0,
}

function onKeyDown(e) {
    if (e.keyCode === KEY_BUTTONS.RIGHT) {
        GAME_STATE.playerX += 5;
        const $player = document.querySelector('.player');
        setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
    }
    if (e.keyCode === KEY_BUTTONS.LEFT) {
        GAME_STATE.playerX -= 5;
        const $player = document.querySelector('.player');
        setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
    }

}

function setPosition($el, x, y) {
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

function createPlayer($container) {
    GAME_STATE.playerX = GAME_WIDTH / 2;
    GAME_STATE.playerY = GAME_HEIGHT - 50;
    const $player = document.createElement('img');
    $player.src = 'img/player-blue-1.png';
    $player.className = 'player';
    $container.appendChild($player);
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}
function init() {
    const $container = document.querySelector('.game');
    createPlayer($container);
}

window.addEventListener('keydown', onKeyDown);

init();