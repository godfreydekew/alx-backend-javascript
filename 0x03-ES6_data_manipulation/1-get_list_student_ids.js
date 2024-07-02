export default function getListStudentIds(myarray) {
  if (!Array.isArray(myarray)) {
    return [];
  }
  return myarray.map((student) => student.id);
}
