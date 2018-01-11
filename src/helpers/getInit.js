import { getRandomValue } from './addRandom'

export function startNewGame() {
    let board = getNewArray();
    let first = getRandomValue(4);
    let second = getRandomValue(4);
    let third = getRandomValue(4, first);
    let fourth = getRandomValue(4);
    let firstValue = getRandomValue(5, 3, 2);
    let secondValue = getRandomValue(5, 3, 2);
    board[first][second] = firstValue;
    board[third][fourth] = secondValue
   
    return board;
}
  
export function getNewArray() {
    return Array(4).fill(0).map(() => Array(4).fill(0));
}