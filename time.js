var nbr = document.getElementById("nbr")
var Btn = document.getElementById("Btn")
var date = new Date()
Btn.addEventListener("click", function(){
    var seconds = date.getSeconds()
    var text = nbr.value
    if(text > 60 || text < 0){
        document.write("不能選超過1~60的數字")
    }
    else {
        if(seconds < text){
            document.write("恭喜贏了")
        }
        else {
            document.write("猜錯了")
        }
    }
})