export default function getListStudentIds(list) {
  let arr = [];
  if (list instanceof Array) {
    list.map((value) => arr.push(value.id));
  }
  return arr;
}
