'use strict';

// ELEMENTEN
const pictureContainer = document.getElementById("container");

// HULP VARIABELEN
    // boolean
    let clickable = true;
    let first = true;

    // normal variables
    let firstImgNumber, secondImgNumber;
    let firstId, secondId;
    let ammOfCorrectGuesses = 0;

//number randomizer 1-18
const usedRandomNumbers = [];

function RandomizeNumbers() {
    let counter = 0;

    while (counter < 18) {
        var math = Math.floor(Math.random() * 18) + 1
        if (!usedRandomNumbers.includes(math)) {
            usedRandomNumbers[counter] = math
            counter++
        }
    }
}
RandomizeNumbers();

//create div's
for (let index = 0; index < 18; index++) {
    let pictureHolder = document.createElement("div");
    pictureHolder.className = "pictures";
    pictureHolder.id = `img-holder${index + 1}`;

    pictureContainer.appendChild(pictureHolder)
}

//create img element
for (let index = 1; index < 19; index++) {
    let pictureHolder = document.getElementById("img-holder" + index);

    let imgElement = document.createElement('img');
    imgElement.className = "imgclass"
    imgElement.id = "img" + index;
    imgElement.src = "images/white.png";

    pictureHolder.appendChild(imgElement);
    pictureHolder.addEventListener("click", function () {
        Selector(this.id, index)
    })
}

function Selector(id, index) {
    if (first) {
        /*
            First image clicked
            store's necesary data for later use
        */
        const currentImgHolder = document.getElementById(id).firstChild.id;

        // firstId is used later
            firstId = currentImgHolder;

        // change image source
            document.getElementById(currentImgHolder).src = `images/img${usedRandomNumbers[index - 1]}.png`;

        // firstImgNumber is used later
            firstImgNumber = usedRandomNumbers[index - 1];

        first = false;

    } else {
        /*
            second image clicked
            will disable any clicking events using "clickable" boolean until checkForEqual() is done
            stores necesary data for later use
        */
        if (!clickable) return;
        clickable = false;

        const secondImgHolder = document.getElementById(id).firstChild.id;
        // secondId is used later
            secondId = secondImgHolder;

        // change image source
            document.getElementById(secondImgHolder).src = `images/img${usedRandomNumbers[index - 1]}.png`;

        // secondImgNumber is used later
            secondImgNumber = usedRandomNumbers[index - 1];

        setTimeout(checkForEqual, 1000);
    }
}

function checkForEqual() {
    /*
        IF firstImgNumber is between 0 and 9
            -do the secondImgNumber - 9 and check if its equal with firstImgNumber

            IF equal
                -keep the images on the screen and add 1 to ammOfCorrectGuesses
            ELSE
                -change the first and second image back to white
            
        ELSE
            -do the firstimgnumber - 9 and check if its equal with secondImgNumber

            IF equal
                -keep the images on the screen and add 1 to ammOfCorrectGuesses
            ELSE
                -change the first and second image back to white


        IF ammOfCorrectGuesses equals 9
            -ask user using a alert if he wants to reset

            IF user wants to reset
                -change all image holder's back to white
                -set ammOfCorrectGuesses to 0
                -and randomize the numbers again
            ELSE
                -set clickable boolean to false to not allow any gameplay
        
    */
    if (firstImgNumber <= 9) {

        let temp = secondImgNumber - 9;

        if (firstImgNumber == temp) {
            ammOfCorrectGuesses += 1;
            console.log(ammOfCorrectGuesses);
        } else {
            document.getElementById(firstId).src = "images/white.png";
            document.getElementById(secondId).src = "images/white.png";
        }

    } else {

        let temp = firstImgNumber - 9;

        if (secondImgNumber == temp) {
            ammOfCorrectGuesses += 1;
            console.log(ammOfCorrectGuesses)
        } else {
            document.getElementById(firstId).src = "images/white.png";
            document.getElementById(secondId).src = "images/white.png";
        }

    }

    clickable = true;
    first = true;

    if (ammOfCorrectGuesses === 9) {
        if (confirm('YOU WON!\n' +
                    'Do you wish to reset the game? then press "Ok"\n' +
                    'if you wish to just quit. press "Cancel"')){
            window.location.href = '';
        } else {
            clickable = false;
            first = false;
        }
    }
}
