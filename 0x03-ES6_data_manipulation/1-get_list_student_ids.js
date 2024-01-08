export default function getListStudentIds(list) {
  const arr = [];
  if (list instanceof Array) {
    list.map((value) => arr.push(value.id));
  }
  return arr;
}
