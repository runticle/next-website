const GAME_DATA = {
    // USER DATA
    INITIAL_USER_DATA: {
        INITIAL_GUN_POSITION_X: 245,
        BULLET_SPEED: 5, // px / tick
        GUN_SPEED: 3,
        INITIAL_HEALTH: 10, // hits
        GUN_WIDTH: 40,
        GUN_HEIGHT: 75
    },

    // GAME DATA
    BULLET_SIZE: 5,
    GAME_PULSE: 10, // ms
    BIRD_HEIGHT: 40,
    BIRD_WIDTH: 40, // px. Only green bird. Tricky in future.
    SHIT_SPEED: 4,
    SHIT_SIZE: 10,
    // SHIT_ODDS: 0.005,

    INITIAL_GUN_POSITION: {
        x: 480,
        y: 0,
        last: null
    }
}

export default GAME_DATA