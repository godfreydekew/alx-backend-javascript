export default function getListStudentIds(myarray) {
  let empty = [];
  if (Array.isArray(myarray)) {
    empty = myarray.map((student) => student.id);
  }
  return empty;
}
