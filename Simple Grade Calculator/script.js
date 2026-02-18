const result = document.getElementById('userInput');
const butn = document.getElementById('btn');
const grading = document.getElementById('grade');



butn.addEventListener('click' , () => {
    const score = parseFloat(result.value);
   if (score >= 90 && score <= 100) {
        grading.textContent = "A+";
    } else if (score >= 85 && score < 90) {
        grading.textContent = "A";
    } else if (score >= 80 && score < 85) {
        grading.textContent = "A-";
    } else if (score >= 75 && score < 80) {
        grading.textContent = "B+";
    } else if (score >= 70 && score < 75) {
        grading.textContent = "B-";
    } else if (score >= 65 && score < 70) {
        grading.textContent = "B";
    } else if (score >= 60 && score < 65) {
        grading.textContent = "C+";
    } else if (score < 60 && score >= 0) {
        grading.textContent = "F";
    } else {
        grading.textContent = "Invalid number";
    }
});