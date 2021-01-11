var usedNumbers = []
var counter = 0

while(counter < 9){
    var math = Math.floor(Math.random() * 9)
    
    if(!usedNumbers.includes(math)){
        usedNumbers[counter] = math
        counter++
    }
}

let imgsrc = []

for (let index = 0; index < 9; index++) {
    imgsrc[index] = "images/img" + usedNumbers[index] + ".png"
}

for (let index = 0; index < 9; index++) {
    document.getElementById("img" + (index + 1)).src = imgsrc[index]
}