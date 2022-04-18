import { assets } from "./assets.js"
import { initMap, draw } from "./map.js"
const game = document.getElementById('game')

// map x:9[0-8] x y:5[0-4] (x50px)
let map = initMap()
let coinN = map.flat().filter(v => v === 2).length
// draw map
const drawMap = () => {
    game.textContent = ""
    map.forEach(arr => {
        arr.forEach(v => {
            if (v === 0) draw.ground()
            else if (v === 1) draw.wall()
            else if (v === 2) draw.coin()
            else if (v === 3) draw.pacman()
        })
    })
    // coin === 0 end game and restart
    if (coinN === 0) {
        alert("end game")
        coinN = initMap().flat().filter(v => v === 2).length
        map = initMap()
        assets.pacman.score = 0
        assets.pacman.x = 4
        assets.pacman.y = 4
        drawMap()
    }
}
drawMap()
// pacman control key
document.addEventListener('keydown', ({ key }) => {
    switch (key) {
        case "ArrowUp":
            if (map[assets.pacman.y - 1][assets.pacman.x] !== assets.wall.id) {
                if (map[assets.pacman.y - 1][assets.pacman.x] !== assets.ground.id) {
                    --coinN
                    assets.pacman.score += assets.pacman.scoreInc
                }
                map[assets.pacman.y][assets.pacman.x] = assets.ground.id
                assets.pacman.y -= 1
                map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
                drawMap()
            }
            break;
        case "ArrowDown":
            if (map[assets.pacman.y + 1][assets.pacman.x] !== assets.wall.id) {
                if (map[assets.pacman.y + 1][assets.pacman.x] !== assets.ground.id) {
                    --coinN
                    assets.pacman.score += assets.pacman.scoreInc
                }
                map[assets.pacman.y][assets.pacman.x] = assets.ground.id
                assets.pacman.y += 1
                map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
                drawMap()
            }
            break;
        case "ArrowLeft":
            if (map[assets.pacman.y][assets.pacman.x - 1] !== assets.wall.id) {
                if (map[assets.pacman.y][assets.pacman.x - 1] !== assets.ground.id) {
                    --coinN
                    assets.pacman.score += assets.pacman.scoreInc
                }
                map[assets.pacman.y][assets.pacman.x] = assets.ground.id
                assets.pacman.x -= 1
                map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
                drawMap()
            }
            break;
        case "ArrowRight":
            if (map[assets.pacman.y][assets.pacman.x + 1] !== assets.wall.id) {
                if (map[assets.pacman.y][assets.pacman.x + 1] !== assets.ground.id) {
                    --coinN
                    assets.pacman.score += assets.pacman.scoreInc
                }
                map[assets.pacman.y][assets.pacman.x] = assets.ground.id
                assets.pacman.x += 1
                map[assets.pacman.y][assets.pacman.x] = assets.pacman.id
                drawMap()
            }
            break;
    }
})