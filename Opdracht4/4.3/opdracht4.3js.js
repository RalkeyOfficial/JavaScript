var ogen = ["ogen1", "ogen2", "ogen3", "ogen4", "ogen5"]
var neus = ["neus1", "neus2", "neus3"]
var mond = ["mond1", "mond2", "mond3", "mond4"]

let ogenteller = -1
let neusteller = -1
let mondteller = -1

const ogenholder = document.getElementById("slider1")
const neusholder = document.getElementById("slider2")
const mondholder = document.getElementById("slider3")

ogenholder.addEventListener("click", function(){
    ogenholder.innerHTML = ogen[slider1()]
})
neusholder.addEventListener("click", function(){
    neusholder.innerHTML = neus[slider2()]
})
mondholder.addEventListener("click", function(){
    mondholder.innerHTML = mond[slider3()]
})

function slider1() {
    if(ogenteller >= ogen.length -1){
        ogenteller = 0
    }else{
        ogenteller++
    }

    return ogenteller
}
function slider2() {
    if(neusteller >= neus.length -1){
        neusteller = 0
    }else{
        neusteller++
    }

    return neusteller
}
function slider3() {
    if(mondteller >= mond.length -1){
        mondteller = 0
    }else{
        mondteller++
    }

    return mondteller
}
