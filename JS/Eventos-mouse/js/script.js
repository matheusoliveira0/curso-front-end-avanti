const content = document.querySelector("#content");

const showButton = document.querySelector("#show");

const hideButton = document.querySelector("#hide");

const showHideBtn = document.querySelector("#show-hide")

showButton.addEventListener("click", ()=> {
    content.classList.add("show");
    content.classList.remove("hide");
})

hideButton.addEventListener("mousemove", ()=> {
    content.classList.add("hide");
    content.classList.remove("show");
})

showHideBtn.addEventListener("click", ()=> {
    content.classList.toggle("hide")
})