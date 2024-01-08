export default function cleanSet(set, startString) {
  let str = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        arr.push(element.slice(startString.length));
      }
    }
    str = arr.join('-');
  }
  return str;
}
