export default function getListStudentIds(myarray) {
  let empty = [];
  if (myarray instanceof Array) {
    empty = myarray.map((student) => student.id);
  }
  return empty;
}
