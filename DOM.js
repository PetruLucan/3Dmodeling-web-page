var navBarEl = document.getElementById("navBar");


navBarEl = document.addEventListener("click", onClick);

function onClick(){
    console.log(navBarEl)
    navBarEl.classList.add("active");
}