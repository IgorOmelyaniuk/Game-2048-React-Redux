export const horizontalMove = (board, direction) => {
  let newArr = [],
    line,
    sum = 0;
    
  if (direction === 'left') {
    board.forEach(item => {
      line = leftMove(item);
      newArr.push(line.newLine);
      sum += line.result;
    });
  } else if (direction === 'right') {
    board.forEach(item => {
      line = rightMove(item);
      newArr.push(line.newLine);
      sum += line.result;
    });
  }
    
  return {
    newArr: newArr,
    result: sum
  }
}

export const leftMove = item => {
  let arrWithValues = [];
  
  item.forEach(value => {
    if (value) {
      arrWithValues.push(value);
    } 
  });
  
  let newLine = [], result = 0;
  
  if (arrWithValues.length > 1) {
    for (let i = 0; i < arrWithValues.length; i++) {
      if (arrWithValues[i] === arrWithValues[i+1]) {
        let sum = arrWithValues[i] + arrWithValues[i+1];
        result += sum;
        newLine.push(sum);
        i += 1;
      } else {
        newLine.push(arrWithValues[i]);
      }
    }
  } else {
    newLine.push(arrWithValues[0]);
  }
  
  if (newLine.length < item.length) {
    let amount = item.length - newLine.length;

    for (let i = 1; i <= amount; i++) {
      newLine.push(null);
    }
  }
  
  return {
    newLine: newLine,
    result: result
  }
}

export const rightMove = item => {
    let arrWithValues = [];
  
    item.forEach(value => {
      if (value) arrWithValues.push(value);
    });
  
    let newLine = [], result = 0;
  
    if (arrWithValues.length > 1) {
      for (let i = arrWithValues.length - 1; i >= 0; i--) {
  
        if (arrWithValues[i] === arrWithValues[i-1]) {
          let sum = arrWithValues[i] + arrWithValues[i-1];
          result += sum;
          newLine.push(sum);
          i -= 1;
        } else {
          newLine.push(arrWithValues[i]);
        }
      }
    } else {
      newLine.push(arrWithValues[0]);
    }
  
    if (newLine.length < item.length) {
      let amount = item.length - newLine.length;
      for (let i = 1; i <= amount; i++) {
        newLine.push(null);
      }
    }
  
    return {
      newLine: newLine.reverse(),
      result: result
    }
}

export const verticalMove = (board, direction) => {
  let changeArr = transformArray(board);
  let line, newArr = [], sum = 0;
  
  if (direction === 'top') {
    changeArr.forEach(item => {
      line = leftMove(item);
      newArr.push(line.newLine);
      sum += line.result;
    });
  } else if (direction === 'bottom') {
    changeArr.forEach(item => {
      line = rightMove(item);
      newArr.push(line.newLine);
      sum += line.result;
    });
  }
  
  return {
    newArr: transformArray(newArr),
    result: sum
  }
    
}

export const transformArray = board => {
  let maxLength = getMaxLength(board),
      result = [];
  for (let i = 0; i < maxLength; i++) {
    let line = [];
    board.forEach(item => line.push(item[i]));
    result.push(line);
  }
  
  return result;
}

export const getMaxLength = arr => {
  let max = 0;

  arr.forEach(item => {
    if (item.length > max) max = item.length;
  })
  
  return max;
}