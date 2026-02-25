let students = [];

const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let studentName = input.value;
    students.push(studentName);
   console.log(students);
   input.value = "";
});


