export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((student) => {
    const gradeArr = newGrades.filter((grade) => grade.studentId === student.id);
    /* eslint-disable no-param-reassign */
    if (gradeArr.length === 0) {
      student.grade = 'N/A';
    } else {
      student.grade = gradeArr[0].grade;
    }
    /* eslint-enable no-param-reassign */
    return student;
  }).filter((value) => value.location === city);
}
