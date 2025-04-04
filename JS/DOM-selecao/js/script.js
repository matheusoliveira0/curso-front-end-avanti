// selação por id

const content = document.getElementById("content")

console.log("content",content)

content.innerHTML = `<p>Paragrafo de texto</p>`
content.style.backgroundColor="#f00"
content.style.fontFamily="arial"
content.style.color="#fff"

/*
// seleçao por clase

const classText = document.getElementsByClassName("text") 
console.log("classText",classText)

for(text of classText) {
    text.style.color="#f0f"
}


// seleção por tag 

const titles = document.getElementsByTagName("h2")

for(title of titles){
    title.innerHTML = `Oleoleoleola`
    title.style.backgroundColor="#35f"
    title.style.fontSize="40px"
}



//querySelector

const elementFeature = document.querySelector("#feature")

const newElement = document.createElement("p")

newElement.textContent ="lalalalalalalalalalalalalalalala"

elementFeature.append(newElement)

elementFeature.insertAdjacentHTML("beforeend", "<p> Outro paragrafo criado dinamicamente</p>")

document.body.insertBefore(newElement,elementFeature)

*/


// query selector all

const links = document.querySelectorAll("#links a")
 console.log("links", links)

 for(link of links){
    link.classList.add("features-links")
    console.log(link.getAttribute("href"))
    link.target = "_blank"
    link.title = link.getAttribute("href").slice(0,-5)
 }

 //remove

 content.remove() //remove o content setado la em cima 


 // navegação pelo dOM

 const lista = document.querySelector("#links ul")

 lista.parentNode.style.backgroundColor="#f00"

 lista.children

 console.log("filho",lista.children)

 for(list of lista.children){
    list.style.fontSize="50px"
 }

 lista.firstElementChild.style.fontSize="21,px"