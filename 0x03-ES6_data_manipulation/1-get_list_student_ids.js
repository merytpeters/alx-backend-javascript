import getListStudents from './0-get_list_students';

export default function getListStudentIds(students = getListStudents()) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
