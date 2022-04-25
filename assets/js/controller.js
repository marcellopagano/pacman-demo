import { assets } from "./assets.js"
import { initMap } from "./map.js"
import { drawMap } from './main.js'
import { sfx } from "./sfx.js"

// score table
const scoreView = document.getElementById('score')

// map x:9[0-8] x y:5[0-4] 
let map = initMap()
// count coins
let coinN = map.flat().filter(v => v === 2).length
// controller movement
const controller = {
    checkMove(y, x, className) {
        console.log(assets.pacman.y)
        if (map[y][x] !== assets.wall.id) {
            if (map[y][x] !== assets.ground.id) {
                --coinN
                map[assets.pacman.y][assets.pacman.x] = assets.coin.id ? sfx.coin().play() : null
                assets.pacman.score += assets.pacman.scoreInc
                scoreView.textContent = `HIGH SCORE ${assets.pacman.score}`
            }
            sfx.chomp().play()
            map[assets.pacman.y][assets.pacman.x] === assets.coin.id ? sfx.coin().play() : null
            map[assets.pacman.y][assets.pacman.x] = assets.ground.id
            assets.pacman.x = x
            assets.pacman.y = y
            map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
            drawMap()
            pacman.setAttribute('class', className)
            checkEndgame()
        }
    }
}
// check end of game when coins finish
function checkEndgame() {
    // coin === 0 end game and restart
    if (coinN === 0) {
        alert("end game")
        coinN = initMap().flat().filter(v => v === 2).length
        map = initMap()
        assets.pacman.score = 0
        assets.pacman.x = 4
        assets.pacman.y = 4
        drawMap()
        pacman.setAttribute('class', 'pacman-right')
        scoreView.textContent = 'HIGH SCORE 0'
    }
}
//  control key
let y = null
let x = null
let className = null
document.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case "ArrowUp":
            y = assets.pacman.y - 1
            x = assets.pacman.x
            className = 'pacman-up'
            controller.checkMove(y, x, className)
            break;
        case "ArrowDown":
            y = assets.pacman.y + 1
            x = assets.pacman.x
            className = 'pacman-down'
            controller.checkMove(y, x, className)
            break;
        case "ArrowLeft":
            y = assets.pacman.y
            x = assets.pacman.x - 1
            className = 'pacman-left'
            controller.checkMove(y, x, className)
            break;
        case "ArrowRight":
            y = assets.pacman.y
            x = assets.pacman.x + 1
            className = 'pacman-right'
            controller.checkMove(y, x, className)
            break;
        default:
    }
});

export { map }
