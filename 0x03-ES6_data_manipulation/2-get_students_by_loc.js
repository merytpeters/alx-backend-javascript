import getListStudents from './0-get_list_students';

export default function getListStudentByLocation(students = getListStudents(), city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city);
}
