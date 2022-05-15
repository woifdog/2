var number = document.getElementById("number")
var Btn = document.getElementById("Btn")
var randomnumbermin = 10
var randomnumberminid = document.getElementById("randomnumberminid")
var minBtn = document.getElementById("minBtn")
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
var randomnumber = getRandom(1, randomnumbermin)
minBtn.addEventListener("click", function(){
    if(randomnumberminid.value <= 1 || randomnumberminid.value > 50) {
        document.write("不可以超出範圍喔")
    }
    else {
    randomnumbermin = randomnumberminid.value
    randomnumberminid.value = ""
    }
})
Btn.addEventListener("click", function(){
    if (number.value == randomnumber) {
        document.write("恭喜猜對")
    }
    else {
        if (number.value == "") {
            document.write("不能留空格喔")
        }
        else {
            document.write("很可惜你猜錯了")
        }
    }
})