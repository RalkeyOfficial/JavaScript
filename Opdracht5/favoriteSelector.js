pictureHolder = document.getElementsByClassName("pictures")

for (let index = 0; index < 9; index++) {
    favoriet = document.createElement("div")
    favoriet.className = "favorite"
    favoriet.id = "favorite_" + (index+1)
    pictureHolder[index].appendChild(favoriet)
}
