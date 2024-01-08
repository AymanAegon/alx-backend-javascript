export default function hasValuesFromArray(set, array) {
  for (const e of array) {
    if (set.has(e) === false) {
      return false;
    }
  }
  return true;
}
