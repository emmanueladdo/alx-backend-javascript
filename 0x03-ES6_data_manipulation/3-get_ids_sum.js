export default function getStudentIdsSum(student) {
  if (!Array.isArray(studentList)) {
    return 0; // If the input is not an array, return 0.
  }

  return studentList.reduce((sum, student) => sum + student.id, 0);
}
