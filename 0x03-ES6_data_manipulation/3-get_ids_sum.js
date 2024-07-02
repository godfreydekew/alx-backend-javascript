export default function getStudentIdsSum(myarray) {
  return myarray.reduce((accumulator, student) => accumulator + student.id, 0);
}
