const level0 = {
    0: [
        {
            birdCount: 1,
            gameStepStart: 0,
            maxDepth: 500
        },
        {
            birdCount: 4,
            gameStepStart: 50,
            maxDepth: 350
        },],
    1: [
        {
            birdCount: 6,
            gameStepStart: 0,
            maxDepth: 200
        },
        {
            birdCount: 10,
            gameStepStart: 100,
            maxDepth: 400
        },
    ],
    2: [{
        birdCount: 10,
        gameStepStart: 0,
        maxDepth: 240
    }],
    3: [{
        birdCount: 13,
        gameStepStart: 0,
        maxDepth: 260
    }],
    4: [{
        birdCount: 20,
        gameStepStart: 0,
        maxDepth: 190
    }]
}

const getStartPositionsForWaveN = (count, gameStepStart, depth) => {
    const WIDTH = 1000

    const SPEED = 2 // px / step

    const startX = Array.from({ length: count }).map((e, i) => ({
        x: (WIDTH / (count + 1)) * (i + 1),
        y: - SPEED * gameStepStart,
        maxDepth: depth
    }))

    return startX
}

const generateWave = (wave) => {

    const birdPositions = []

    for (const batch of wave) {
        const start = getStartPositionsForWaveN(batch.birdCount, batch.gameStepStart, batch.maxDepth)
        birdPositions.push(start)
    }

    const startingPos = birdPositions.flat()

    const flightPaths = []

    for (const bird of startingPos) {
        let step = 0
        let depth = bird.y
        const maxDepth = bird.maxDepth

        const birdPath = {}

        // individual bird flightpath
        while (depth < maxDepth) {
            birdPath[step] =
            {
                x: bird.x,
                y: depth
            }

            depth += 2 // distance per step
            step += 1
        }

        let direction = "RIGHT";
        let move = 1

        while (step < 100000) {

            if (birdPath[step - 1] === undefined) {
                console.log(birdPath.length)
                break
            }


            const last_x = birdPath[step - 1]['x']

            switch (direction) {
                case 'RIGHT':
                    if (last_x < 950) {
                        birdPath[step] = {
                            x: last_x + move,
                            y: maxDepth,
                        }
                    } else {
                        direction = 'LEFT'
                        birdPath[step] = {
                            x: last_x - move,
                            y: maxDepth,
                        }
                    }
                    break


                case 'LEFT':
                    if (last_x > 50) {
                        birdPath[step] = {
                            x: last_x - move,
                            y: maxDepth,
                        }
                    } else {
                        direction = 'RIGHT'
                        birdPath[step] = {
                            x: last_x + move,
                            y: maxDepth,
                        }
                    }
                    break
            }

            step += 1
        }

        flightPaths.push(birdPath)
    }

    return flightPaths;
}

const generateLevel0 = () => {
    let waves = {

    }

    for (const key in level0) {
        waves[key] = generateWave(level0[key])
    }

    return waves
}

export default generateLevel0