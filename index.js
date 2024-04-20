let element = document.getElementById("root")
// element.innerText = "<h1>Welcome to DOM</h1>"
let greetings = document.createElement("h1")
greetings.innerText = "Welcome to DOM"
element.append(greetings,"I am appended")//works
// element.appendChild(greetings,"I am appended")//only greetings will be inserted

//append - accepts dom node or text(convert to text node).
//appendChild - accepts only dom node.

function constructUl(){
    let node = document.createElement("div")//created a div

    let node1 = document.createElement("ul")//created a ul
    node1.setAttribute("class","list")
    let listItems = []

    let listItem1 = document.createElement("li")//created li
    listItem1.innerText = "Create Element"//added text to li
    listItems.push(listItem1) 

    let listItem2 = document.createElement("li")
    listItem2.innerText = "Get Element"
    listItems.push(listItem2)

    let listItem3 = document.createElement("li")
    listItem3.innerText = "Append Element"
    listItems.push(listItem3)

    node1.append(...listItems)

    node.appendChild(node1) // append ul to the div

    document.body.appendChild(node) // append div to the body of html
}

let button = document.createElement("button")
button.innerText = "Click Me"
button.setAttribute("id","btn")
button.setAttribute("class","button")
button.addEventListener("click",constructUl)
document.body.appendChild(button)

let button1 = document.createElement("button")
button1.innerText = "QuerySelector"
button1.setAttribute("id","btn")
button1.setAttribute("class","button")
button1.addEventListener("click",()=>{
    let elements = document.querySelector(".list")
    elements.setAttribute("style","list-style-type: circle;")
})
document.body.appendChild(button1)

let button2 = document.createElement("button")
button2.innerText = "QuerySelectorAll"
button2.setAttribute("id","btn")
button2.setAttribute("class","button")
button2.addEventListener("click",()=>{
    let elements = document.querySelectorAll(".list")
    elements.forEach((e)=>{
        e.setAttribute("style","list-style-type: circle;")
    })
})
document.body.appendChild(button2)