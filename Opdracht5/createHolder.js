pics = document.getElementById("pics")

function createPicsHolder() {
    for (let index = 0; index < 9; index++) {
        nieuwelement = document.createElement("div")
        nieuwelement.className = "pictures"
        nieuwelement.id = "img" + (index + 1)
        pics.appendChild(nieuwelement)
    }
}

createPicsHolder()
