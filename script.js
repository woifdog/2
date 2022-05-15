var title = document.getElementById("title");
var content = document.getElementById("content");
var Btn = document.getElementById("Btn");
var list = document.getElementById("list");

Btn.addEventListener("click", function(){
    list.innerHTML += `
    <div class="article">     
    <h2>${title.value}</h2>
    <P>${content.value}</P>
    <hr>
    </div>
    `;
title.value = ""
content.value = ""
})