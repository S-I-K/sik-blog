let a = document.querySelectorAll('a');
for(let i=0; i<a.length; i++) {
    a[i].addEventListener("click", (e)=>{
        e.preventDefault();
    });
}