import { draw } from "./map.js"
import { map } from "./controller.js"

const game = document.getElementById('game')

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
}
// init game
(function init() {
    drawMap()
})()

export { drawMap }