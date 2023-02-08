const level0 = [
    {
        birdCount: 3,
        timeStart: 0,
        maxDepth: 500
    },
    {
        birdCount: 6,
        timeStart: 50, // ms
        maxDepth: 350

    }, {
        birdCount: 9,
        timeStart: 150, // 15000ms
        maxDepth: 300
    }
];

const getStartPositionsForWaveN = (count, timeStart, depth) => {
    const WIDTH = 1000
    const HEIGHT = 1000

    const FLIGHT_LENGTH = 1000

    const SPEED = 2 // px / step

    const startX = Array.from({ length: count }).map((e, i) => ({
        x: (WIDTH / (count + 1)) * (i + 1),
        y: - SPEED * timeStart,
        maxDepth: depth
    }))

    return startX
}

const generateLevel0 = () => {

    const birdPositions = []

    for (const wave of level0) {
        const start = getStartPositionsForWaveN(wave.birdCount, wave.timeStart, wave.maxDepth)
        birdPositions.push(start)
    }

    // now we have big array of all starting positions for birds in level

    const startingPos = birdPositions.flat()


    // ------------------------------------------------------------------------

    //  for each wave, the max depth is set
    // so we want to drop until that depth, and then left-right until dead
    // we want an array of arrays now. Each bird position
    // eventually they hover in one position

    const flightPaths = []

    for (const bird of startingPos) {
        let depth = bird.y
        const maxDepth = bird.maxDepth

        // console.log(bird)

        const birdPath = {
            // step: { pos }
        }

        let i = 0

        while (depth < maxDepth) {
            birdPath[i] =
            {
                x: bird.x,
                y: depth
            }

            depth += 5 // speed * 10ms step
            i += 1
        }

        flightPaths.push(birdPath)
    }

    return flightPaths;
}

export default generateLevel0