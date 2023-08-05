export default function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter(student => student.location === city)
                   .map(student => { 
                        grade = newGrades.find(grade => grade.studentId === student.id)
                        grade ? student.grade = grade.grade : student.grade = 'N/A'
                        return student
                    }) 
}