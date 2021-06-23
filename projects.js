const home = document.querySelector(".homeContainer");
const projLink = document.querySelector("#projects-av")
const homeChildren = Array.from(home.children);

// const descrp = document.querySelector(".description");
// const descrp = document.querySelector(".description");


var proj = ["LessTrvld", "Emerge", "ExpressCare", "Adedotcom"]
var descContent =  ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio ex eligendi! Pariatur, debitis quaerat!",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio ex eligendi! Pariatur, debitis quaerat!",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio ex eligendi! Pariatur, debitis quaerat!",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus odio ex eligendi! Pariatur, debitis quaerat!"]
var techUsedContent = ["JavaScript • React","Java • MicroPython • Android Studio • SolidWorks", "Java • Android Studio • Firebase  ", "HTML • CSS • JavaScript"]
var pics = ["lessTrvld.jpg", "emerge.jpg","ExpressCare.jpg","adedotcom.jpg"]
var links = ["https://github.com/adesob/LessTrvld","https://github.com/adesob/E-merge","https://github.com/adesob/ExpressCare","https://github.com/adesob/adedotcom"]

// const imgBx = document.querySelector()
// var lessTrvldTech = ["fab fa-js-square","fab fa-react"]
// var emergeTech = ["fab fa-java","fab fa-android"]
// var expressTech = ["fab fa-java","fab fa-android"]
// var adedotcomTech = ["fab fa-html5","fab fa-css3-alt","fab fa-js-square"]



projLink.addEventListener('click', e =>{
    homeChildren.forEach(removeElement)
    createProjects()
    
});

// descrp.addEventListener('mouseover', e=>{

// });

function removeElement(element){
    element.remove();  
}

function insertContent(num){
    // const image = document.createElement("img");
    // image.id = "pic" + num
    // image.className = "pic"
    // image.src = pics[num-1]

    // const imageBx = document.querySelector("#imageBx" + num)
    // imageBx.append(image)
    
    const desc = document.querySelector("#description" + num)

    const heading = document.createElement("p")
    const techUsed = document.createElement("p")
    const link = document.createElement("a")

    heading.id = "explan" + num
    heading.className = "explan"

    techUsed.className = "techUsed"
    techUsed.id = "techUsed" + num
    techUsed.innerText = techUsedContent[num-1]

    // link.className = "link"
    link.href = links[num-1]
    link.target = "_blank"
    link.className = "gitLink"
    link.innerHTML = '<i class="fa fa-external-link" id="link" aria-hidden="true"></i>'

    desc.append(heading)
    desc.append(techUsed)
    desc.append(link)

    desc.firstElementChild.innerHTML = descContent[num-1]
    
    // if(num == 1){ 
    //     lessTrvld(num) 
    // }
    // else if(num == 2){ emerge(num) }
    // else if (num == 3){ express(num) }
    // else { adedotcom(num) }
}


function createProjects(){
    home.className = "projectsContainer";

    for( var i = 0; i<4; i++){
        const item = document.createElement("div")
        item.id = "item" + (i+1)
        item.className = "items"
        home.append(item)

        item.append(document.createElement("div"))
        item.append(document.createElement("h1"))

        const itemsContent = Array.from(item.children)

        child = document.createElement("div")
        child.className = "description"
        child.id = "description" + (i+1)


        const image = document.createElement("img");
        image.id = "pic" + (i+1)
        image.className = "pic"
        image.src = pics[i]


        itemsContent[0].id = "imageBx" + (i+1)
        itemsContent[0].className = "imageBx"
        itemsContent[0].append(image)
        itemsContent[0].append(child)
        

        itemsContent[1].id = "projectName" + (i+1)
        itemsContent[1].className = "projectName"
        itemsContent[1].innerText = proj[i]

        insertContent(i+1);
    }
}





function lessTrvld(num){
    const x = document.querySelector("#icons" + num)
    console.log(x)

    for(var i = 0; i<lessTrvldTech.length; i++){
        
        av = document.createElement("i")
        av.className = lessTrvldTech[i];
        console.log(av)

        x.append(av);
    }
}

function emerge(num){
    const x = document.querySelector("#icons" + num)
    for(var i = 0; i<emergeTech.length; i++){
        av = document.createElement("i")
        av.className = emergeTech[i];
        x.append(av);
    }
}

function express(num){
    const x = document.querySelector("#icons" + num)
    for(var i = 0; i<expressTech.length; i++){
        av = document.createElement("i")
        av.className = expressTech[i];
        x.append(av);
    }
}

function adedotcom(num){
    const x = document.querySelector("#icons" + num)
    for(var i = 0; i<adedotcomTech.length; i++){
        av = document.createElement("i")
        av.className = adedotcomTech[i];
        x.append(av);
    }
}
