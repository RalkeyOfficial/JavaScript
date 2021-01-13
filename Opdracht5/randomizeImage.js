var usedNumbers = []
var counter = 0
pictureHolder = document.getElementsByClassName("pictures")

while(counter < 9){
    var math = Math.floor(Math.random() * 9)
    
    if(!usedNumbers.includes(math)){
        usedNumbers[counter] = math
        counter++
    }
}

let imgsrc = []

for (let index = 0; index < 9; index++) {
    imgsrc[index] = "images/img" + (usedNumbers[index] + 1) + ".png"
}

for (let index = 0; index < 9; index++) {
    picture = document.createElement("img")
    picture.src = imgsrc[index]
    picture.id = index + 1
    pictureHolder[index].appendChild(picture)
    
    picture.addEventListener("click", function(){
        makeFavorite(this.id)
    })
}

function makeFavorite(id) {
    notsofavoriet = document.getElementsByClassName("favorite")

    for (let index = 0; index < notsofavoriet.length; index++) {
        notsofavoriet[index].style.backgroundImage = "none"
    }

    favoriet = document.getElementById("favorite_" + id)
    favoriet.style.backgroundImage = "url('images/heart.png')"
}
