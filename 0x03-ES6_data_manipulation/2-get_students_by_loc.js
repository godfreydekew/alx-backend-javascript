export default function getStudentsByLocation(myArray, city) {
  return myArray.filter((student) => student.location === city);
}
