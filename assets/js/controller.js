import { assets } from "./assets.js"
import { initMap } from "./map.js"
import { drawMap } from './main.js'
import { sfx } from "./sfx.js"

// score table
const scoreView = document.getElementById('score')

// map x:9[0-8] x y:5[0-4] (x50px)
let map = initMap()
// count coins
let coinN = map.flat().filter(v => v === 2).length
// controller movement
const controller = {
    up() {
        if (map[assets.pacman.y - 1][assets.pacman.x] !== assets.wall.id) {
            if (map[assets.pacman.y - 1][assets.pacman.x] !== assets.ground.id) {
                --coinN
                map[assets.pacman.y][assets.pacman.x] = assets.coin.id ? sfx.coin().play() : null
                assets.pacman.score += assets.pacman.scoreInc
                scoreView.textContent = `HIGH SCORE ${assets.pacman.score}`
            }
            sfx.chomp().play()
            map[assets.pacman.y][assets.pacman.x] = assets.ground.id
            assets.pacman.y -= 1
            map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
            drawMap()
            pacman.setAttribute('class', 'pacman-up')
            checkEndgame()
        }
    },
    down() {
        if (map[assets.pacman.y + 1][assets.pacman.x] !== assets.wall.id) {
            if (map[assets.pacman.y + 1][assets.pacman.x] !== assets.ground.id) {
                --coinN
                map[assets.pacman.y][assets.pacman.x] = assets.coin.id ? sfx.coin().play() : null
                assets.pacman.score += assets.pacman.scoreInc
                scoreView.textContent = `HIGH SCORE ${assets.pacman.score}`
            }
            sfx.chomp().play()
            map[assets.pacman.y][assets.pacman.x] === assets.coin.id ? sfx.coin().play() : null
            map[assets.pacman.y][assets.pacman.x] = assets.ground.id
            assets.pacman.y += 1
            map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
            drawMap()
            pacman.setAttribute('class', 'pacman-down')
            checkEndgame()
        }
    },
    left() {
        if (map[assets.pacman.y][assets.pacman.x - 1] !== assets.wall.id) {
            if (map[assets.pacman.y][assets.pacman.x - 1] !== assets.ground.id) {
                --coinN
                map[assets.pacman.y][assets.pacman.x] = assets.coin.id ? sfx.coin().play() : null
                assets.pacman.score += assets.pacman.scoreInc
                scoreView.textContent = `HIGH SCORE ${assets.pacman.score}`
            }
            sfx.chomp().play()
            map[assets.pacman.y][assets.pacman.x] === assets.coin.id ? sfx.coin().play() : null
            map[assets.pacman.y][assets.pacman.x] = assets.ground.id
            assets.pacman.x -= 1
            map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
            drawMap()
            pacman.setAttribute('class', 'pacman-left')
            checkEndgame()
        }
    },
    right() {
        if (map[assets.pacman.y][assets.pacman.x + 1] !== assets.wall.id) {
            if (map[assets.pacman.y][assets.pacman.x + 1] !== assets.ground.id) {
                --coinN
                map[assets.pacman.y][assets.pacman.x] = assets.coin.id ? sfx.coin().play() : null
                assets.pacman.score += assets.pacman.scoreInc
                scoreView.textContent = `HIGH SCORE ${assets.pacman.score}`
            }
            sfx.chomp().play()
            map[assets.pacman.y][assets.pacman.x] === assets.coin.id ? sfx.coin().play() : null
            map[assets.pacman.y][assets.pacman.x] = assets.ground.id
            assets.pacman.x += 1
            map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
            drawMap()
            pacman.setAttribute('class', 'pacman-right')
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
//  controller key
document.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case "ArrowUp":
            controller.up()
            break;
        case "ArrowDown":
            controller.down()
            break;
        case "ArrowLeft":
            controller.left()
            break;
        case "ArrowRight":
            controller.right()
            break;
        default:
    }
});

export { map, controller }
