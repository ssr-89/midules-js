const helpers = {
  getValue: function (array, key) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      res.push(array[i][key]);
    }
    return res;
  },
  map: function (array, key) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
      result[array[i][key]] = array[i];
    }
    return result;
  },
  number: 31358,
}
export const getValue = helpers.getValue;
export const map = helpers.map;
export const number = helpers.number;
