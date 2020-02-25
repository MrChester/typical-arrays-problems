exports.min = function min(array) {
    if (array === undefined || array.length === 0){
      return 0;
    }
    else{
      return array.reduce((acc, currentItem) => {
        return acc < currentItem ? acc : currentItem;
    });
    }
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0){
    return 0;
  }
  else{
    return array.reduce((acc, currentItem) => {
      return acc > currentItem ? acc : currentItem;
  });
  }
}

exports.avg = function avg(array) {
  let result;

  if (array === undefined || array.length === 0){
    return 0;
  }
  else{
    let arrLen = array.length;
    result = array.reduce((acc, currentItem) => {
      return acc + currentItem;
    });

    return result / arrLen;
  }
}
