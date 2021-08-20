exports.min = function min (array) {
    if (!array || array.length === 0){
        return 0;
    }
    array.sort((a, b) => b - a);
    return array[array.length-1];
}

exports.max = function max (array) {
    if (!array || array.length === 0){
        return 0;
    }
    array.sort((a, b) => b - a);
    return array[0];
}

exports.avg = function avg (array) {
    if (!array || array.length === 0){
        return 0;
      }
      let sum = 0; 
      let avgNum = 1;
      for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
        
      }
      avgNum = sum/array.length;
      return avgNum;
}
