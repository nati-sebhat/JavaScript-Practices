const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const page = document.getElementById("page");
let count = 0;

increase.addEventListener('click', () => {
    count++;
    page.textContent = count;
    if(count>0){
        page.style.color = "green";
    }else if(count=0){
        page.style.color = "white";
    }
});
decrease.addEventListener('click', () => {
    count--;
    page.textContent = count;

    if(count<0){
        page.style.color = "red";
    }else if(count=0){
        page.style.color = "white";
    }
});
reset.addEventListener('click', () => {
    count = 0;
    page.textContent = count;
});
