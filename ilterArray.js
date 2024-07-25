const students = [
    { name: 'Quincy', grade: 96},
    { name: 'Jason', grade: 84},
    { name: 'Alexis', grade: 100},
    { name: 'Sam', grade: 65},
    { name: 'Katie', grade: 90}
  ];
const StudenntGrade=students.filter(student=>student.grade>=90).map(val=>val.grade).reduce((a,b)=>a+b,30);
console.log(StudenntGrade);