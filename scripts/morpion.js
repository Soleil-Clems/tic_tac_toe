import Morpion from "../modules/morpion.js"

const controlls= document.querySelector('.controls')
const newBtn = document.createElement("button")
newBtn.type="button"
newBtn.id= "reset"

newBtn.style.background="#f8c291"
newBtn.style.color="white"
newBtn.style.display="block"
newBtn.style.position="relative"
newBtn.style.marginTop="1em"
newBtn.style.padding=".75em 1em"
newBtn.style.outline="none"
newBtn.style.border="none"
newBtn.style.borderRadius="3em"
newBtn.style.fontSize="1em"
newBtn.style.boxShadow="0 0.5em 1em -0.5em rgba(0, 0, 0, 0.25)"
newBtn.style.cursor="pointer"
newBtn.style.fontWeight="bold"
newBtn.style.transition="background-color 0.2s, transform 0.2s"

newBtn.addEventListener("mouseenter", ()=>{
    newBtn.style.background="#fad390"

})
newBtn.addEventListener("mouseleave", ()=>{
    newBtn.style.background="#f8c291"

})

const txt = document.createTextNode("Reset")
newBtn.appendChild(txt)

controlls.appendChild(newBtn)
const Game = new Morpion(document.querySelector("#grid"))


  