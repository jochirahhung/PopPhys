var nav = document.getElementById("navbar");
var content="<div class='stuff'>";
content += "<h2>My Nav Bar</h2>";
content += "</div>";
console.log(document.body.contains(nav));
if(document.body.contains(nav)){
    nav.innerHTML=content;
    loadData();
}

var navData;
var request = new XMLHttpRequest();


function loadData() {
    request.open('GET', 'stuff.json');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    navData= JSON.parse(request.responseText);
    console.log(navData);
}