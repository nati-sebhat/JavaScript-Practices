let students = [];

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("studentList");

btn.addEventListener('click', () => {
     
    const studentName= input.value;
   if (studentName === "") {
        alert("Please enter a name");
        return;
    }

      students.push(studentName);
     input.value = "";

    
    displayStudents();

});

function displayStudents() {
      list.innerHTML = "";

    
    for (let i = 0; i < students.length; i++) {
        const li = document.createElement("li");
        li.textContent = students[i];
        list.appendChild(li);
    }
};