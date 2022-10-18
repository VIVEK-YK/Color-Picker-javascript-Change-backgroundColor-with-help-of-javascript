let changeColor = document.querySelector('#changeColor')

changeColor.addEventListener("input", (e)=>{
    let body = document.querySelector("document.body");
    document.body.style.backgroundColor = e.target.value;
});


