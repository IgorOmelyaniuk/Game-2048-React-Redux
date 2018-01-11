import {INITIALIAZING, MOVING, ADDING_RANDOM, VICTORY, LOSING} from '../constants/Game';

export function initialize(board) {
    return {
        type: INITIALIAZING,
        board
    }
}

export function move(board, score) {
    return {
        type: MOVING,
        board,
        score
    }
}

export function addRandom(board) {
    return {
        type: ADDING_RANDOM,
        board
    }
}