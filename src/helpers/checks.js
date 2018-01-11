import { getRandomValue } from './addRandom'
import { transformArray } from './handlersMoving'

export const isEqualArray = (arr1, arr2) => {
  return arr1.every((item, index) => {
    return item.every((value, key) => {
      return value == arr2[index][key];
      })
    })
}

export const isFullRow = arr => {
  let index = getRandomValue(4);
  let isFull = arr[index].every(item => {
      if (item) return true;
  });
  
  if (isFull) return isFullRow(arr);

  return index;
}

export const checkForFullCells = board => {
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let value = board[i][j];
        if (!value) return false;
      }
    }

    return true;
}

export const checkLosing = board => {
    let transformBoard = transformArray(board);
    if (!checkForFullCells(board)) {
      return false;
    } else if (!CheckBoard(board)) {
       return false;
    } else if (!CheckBoard(transformBoard)) {
      return false;
    } else return true;
}
 
export const CheckBoard = board => {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let value = board[i];
      if (value[j] == value[j+1]) return false;
    }
  }

  return true;
}