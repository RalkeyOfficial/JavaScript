var pictures = [1,2,3,4,5,6,7,8,9]
var slideholder = document.getElementById("slideholder")
var teller = 0

slideholder.addEventListener("click", function(){
    clickyVisibility()
    slideholder.style.backgroundImage = "url('images/img" + getimg() + ".png')"
})

function getimg() {
    if(teller >= pictures.length){
        teller = 1;
    }else{
        teller++
    }
    console.log(teller)
    return teller
}

function clickyVisibility() {
    document.getElementById("clicky").style.visibility = "hidden"
}