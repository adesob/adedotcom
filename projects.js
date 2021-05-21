const home = document.querySelector(".homeContainer");
const homeChildren = Array.from(home.children);

home.addEventListener('click', e =>{
    homeChildren.forEach(removeElement)
    home.className = "projectsContainer";
});

function removeElement(element){
    element.remove();  
    home.innerHTML = "";
}