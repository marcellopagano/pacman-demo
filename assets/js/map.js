// init map
export const initMap = () => {
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

export const draw = {
    // ground #0
    ground() {
        const ground = document.createElement('div')
        ground.setAttribute('class', 'ground')
        game.appendChild(ground)
    },
    // wall #1
    wall() {
        const wall = document.createElement('div')
        wall.setAttribute('class', 'wall')
        game.appendChild(wall)
    },
    // coin #2
    coin() {
        const coin = document.createElement('div')
        coin.setAttribute('class', 'coin')
        game.appendChild(coin)
    },
    // pacman #3
    pacman() {
        const pacman = document.createElement('div')
        pacman.setAttribute('id', 'pacman')
        pacman.setAttribute('class', 'pacman-right')
        game.appendChild(pacman)
    },
}