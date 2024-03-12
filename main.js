let todos = []
todos.push("do homework")

let input = document.getElementById("input")
let submit = document.getElementById("submit")
let items = document.getElementById("items")

function addToDoItem() {
    let todo = input.value
    let p = document.createElement("p")
    p.innerText = todo

    let removeButton = document.createElement("button")
    removeButton.innerText = "Remove"

    items.appendChild(p)
    items.appendChild(removeButton)

    function removeItem() {
        p.remove()
        removeButton.remove()
    }
    removeButton.addEventListener("click", removeItem)
}

submit.addEventListener("click", addToDoItem)