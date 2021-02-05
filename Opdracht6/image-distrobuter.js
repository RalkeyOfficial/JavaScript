const pictureContainer = document.getElementById("container");

for (let index = 0; index < 18; index++) {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "pictures";
    pictureHolder.id = `img-holder${index + 1}`; //template literal
    pictureContainer
    .appendChild(pictureHolder)
}

//number randomizer 1-18
const usedRandomNumbers = [];
let counter = 0;
while(counter < 18){
    var math = Math.floor(Math.random() * 18) + 1
    if(!usedRandomNumbers.includes(math)){
        usedRandomNumbers[counter] = math
        counter++
    }
}
console.log(usedRandomNumbers)

//create img element
for (let index = 1; index < 19; index++) {
    pictureHolder = document.getElementById("img-holder" + index);
    imgElement = document.createElement('img');
    imgElement.className = "imgclass"
    imgElement.id = "img" + index;
    imgElement.src = "images/white.png";
    pictureHolder.appendChild(imgElement);

    pictureHolder.addEventListener("click", function(){
        Selector(this.id, index)
    })
}
/*

Memory Game
- Random board maken                                                                                ✓
- Speler die aan de beurt is moet TWEE (en niet meer of minder) afbeeldingen kunnen klikken         ✓
- Die draaien dan om
- Die je moet verrgelijken
    ALS gelijk => speler 1 blijft aan beurt, krijgt een punt, afbeeldingen blijven opengedraaid
        IS alles omgedraaid (einde spel)
    ALS niet gelijk => terug draaien, wissel van speler
- Einde spel => winnaar uitroepen, alles weer terugzetten

*/

//select function
let first = true;
let firstImagenumber, secondImageNumber;

function Selector(id, index) {
    console.log(`DEBUG :: id of selected element: ${id}`);
    console.log(`DEBUG :: index:                  ${index}`)

    if(first){

        const currentImgHolder = document.getElementById(id).firstChild.id;
        console.log(`DEBUG :: id of image element:    ${currentImgHolder}`);

        document.getElementById(currentImgHolder).src = `images/img${usedRandomNumbers[index - 1]}.png`;
        firstImageNumber = usedRandomNumbers[index - 1];
        console.log(`DEBUG :: saved image number      ${firstImagenumber}\n`);

        first = false;

    } else {

        const secondImgHolder = document.getElementById(id).firstChild.id;
        console.log(`DEBUG :: id of image element:    ${secondImgHolder}`);

        document.getElementById(secondImgHolder).src = `images/img${usedRandomNumbers[index - 1]}.png`;
        secondImageNumber = usedRandomNumbers[index - 1];
        console.log(`DEBUG :: saved image number      ${secondImagenumber}\n`);

        first = true;

    }

}
