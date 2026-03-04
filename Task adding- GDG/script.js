const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const colors = ["red", "blue", "green", "black", "pink"];

btn.addEventListener('click', () => {
    if(input.value === ""){
        alert("Enter a text");
    }else{
        let text = input.value;
    let li = document.createElement("li");
    
    li.textContent = text;
    let random = Math.floor(Math.random() * colors.length);
    li.style.color = colors[random];
    
     li.addEventListener('click', () => {
   li.remove();
});
    list.appendChild(li);
    input.value = "";
    }

    
});
