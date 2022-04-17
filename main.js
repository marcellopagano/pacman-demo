const game = document.getElementById('game')

let pacman = {
    score: 0,
    x: 4,
    y: 4
}
// wall #1
const drawWall = () => {
    const wall = document.createElement('div')
    wall.setAttribute('class', 'wall')
    game.appendChild(wall)
}
// coin #2
const drawCoin = () => {
    const coin = document.createElement('div')
    coin.setAttribute('class', 'coin')
    game.appendChild(coin)
}
// pacman #3
const drawPacman = () => {
    const el = document.createElement('div')
    el.setAttribute('id', 'pacman')
    el.textContent = pacman.score
    game.appendChild(el)
}
// ground #4
const drawGround = () => {
    const ground = document.createElement('div')
    ground.setAttribute('class', 'ground')
    game.appendChild(ground)
}
// map x:9[0-8] x y:5[0-4] (x50px)
let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 3, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
]
let coinN = map.flat().filter(v => v === 2).length
// init new game
const initMap = () => {
    return [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 1, 2, 1, 1, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 1, 2, 3, 2, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 1],
        [1, 2, 2, 2, 1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
}
// draw map
const drawMap = () => {
    game.textContent = ""
    map.forEach(arr => {
        arr.forEach(v => {
            if (v === 1) drawWall()
            else if (v === 2) drawCoin()
            else if (v === 3) drawPacman()
            else if (v === 4) drawGround()
        })
    })
    // coin === 0 end game and restart
    if (coinN === 0) {
        alert("end game")
        coinN = initMap().flat().filter(v => v === 2).length
        map = initMap()
        pacman = {
            score: 0,
            x: 4,
            y: 4
        }
        drawMap()
    }
}
drawMap()
// pacman control key
const pacDOM = document.getElementById('pacman')
document.addEventListener('keydown', ({ key }) => {
    /**
        #1 wall
        #2 coin
        #3 pacman
        #4 ground
    */

    switch (key) {
        case "ArrowUp":
            if (map[pacman.y - 1][pacman.x] !== 1) {
                if (map[pacman.y - 1][pacman.x] !== 4) {
                    --coinN
                    pacman.score += 10
                }
                map[pacman.y][pacman.x] = 4
                pacman.y -= 1
                map[pacman.y][pacman.x] = 3
                drawMap()
            }
            break;
        case "ArrowDown":
            if (map[pacman.y + 1][pacman.x] !== 1) {
                if (map[pacman.y + 1][pacman.x] !== 4) {
                    --coinN
                    pacman.score += 10
                }
                map[pacman.y][pacman.x] = 4
                pacman.y += 1
                map[pacman.y][pacman.x] = 3
                drawMap()
            }
            break;
        case "ArrowLeft":
            if (map[pacman.y][pacman.x - 1] !== 1) {
                if (map[pacman.y][pacman.x - 1] !== 4) {
                    --coinN
                    pacman.score += 10
                }
                map[pacman.y][pacman.x] = 4
                pacman.x -= 1
                map[pacman.y][pacman.x] = 3
                drawMap()
            }
            break;
        case "ArrowRight":
            if (map[pacman.y][pacman.x + 1] !== 1) {
                if (map[pacman.y][pacman.x + 1] !== 4) {
                    --coinN
                    pacman.score += 10
                }
                map[pacman.y][pacman.x] = 4
                pacman.x += 1
                map[pacman.y][pacman.x] = 3
                drawMap()
            }
            break;
    }
})