export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let str = '';
  for (const e of set) {
    const index = e.indexOf(startString);
    if (index === 0) {
      str += `${e.substring(startString.length)}-`;
    }
  }
  return str.substring(0, str.length - 1);
}
