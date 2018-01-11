import { isFullRow } from './checks'

export const getRandomInt = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomValue = (max, exclude, min = 0) => {
  let value = getRandomInt(max, min)

  while(exclude === value) {
    value = getRandomInt(max, min);
  }

  return value;
}

export const getSecondIndexCell = (arr, firstIndex) => {
  let secondIndex = getRandomValue(4);

  while (arr[firstIndex][secondIndex]) {
    secondIndex = getRandomValue(4);
  }

  return secondIndex;
}

export const addRandomCell = (board) => {
  let copy = board.slice();
  let value = getRandomValue(5, 3, 2);
  let firstIndex = isFullRow(copy);
  let secondIndex = getSecondIndexCell(copy, firstIndex);
  copy[firstIndex][secondIndex] = value;

  return copy;
}