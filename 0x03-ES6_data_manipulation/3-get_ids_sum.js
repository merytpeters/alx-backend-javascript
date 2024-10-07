import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(students = getListStudents()) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}
