export default function appendToEachArrayValue(array, appendString) {
  for (let idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
