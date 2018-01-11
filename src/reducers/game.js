import {INITIALIAZING, MOVING, ADDING_RANDOM, VICTORY, LOSING} from '../constants/Game';

import { getNewArray } from '../helpers/getInit'

const emptyArr = getNewArray();

const initialState = {
    board: emptyArr,
    score: 0,
    losing: false,
    victory: false
}

const game = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIAZING:
            return {...state, board: action.board, score: 0, losing: false, victory: false}
        
        case ADDING_RANDOM: {
            return {...state, board: action.board}
        }

        case MOVING: {
            let score = state.score;
            score += action.score;
            return {...state, board: action.board, score: score}
        }

        case LOSING: {
            return {...state, losing: true }
        }

        case VICTORY: {
            return {...state, victory: true }
        }

        default:
            return state
    }
}

export default game

