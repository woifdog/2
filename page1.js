var Btn = document.getElementById("Button")
var date = new Date()
var senode = date.getSeconds()
var year = date.getFullYear()
var Hours = date.getHours()
var min = date.getMinutes()

Btn.addEventListener("click", function(){
    document.write("現在時間:" + year + "年" + Hours + "日" + min + "分" + senode + "秒");
})