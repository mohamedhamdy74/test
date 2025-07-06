let btn = document.createElement("button");
btn.innerHTML=("click me");
btn.onclick = function(){
    alert("hello");
}
document.body.appendChild(btn);