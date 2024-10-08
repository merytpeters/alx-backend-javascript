import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(students = getListStudents(), city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeRecord = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}
