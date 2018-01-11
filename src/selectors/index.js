import { createSelector } from 'reselect'
import { checkLosing } from '../helpers/checks'

const getBoard = state => state.game.board
const getScore = state => state.game.score

export const getWin = createSelector(
    [getBoard, getScore],
    (board, score) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let value = board[i][j];
                if (value == 2048) return true;
            }
        }
        return false;
    }
)

export const getLose = createSelector(
    [getBoard],
    (board) => {
        return checkLosing(board);
    }
)