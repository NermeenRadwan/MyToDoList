//=============DOM Elements=================

/* console.log(document.body);
console.log(document.head);
document.body.style.backgroundColor = "lightblue";

console.log(document.all);
 */

/* document.querySelector('#demo').onclick = function(){
    alert("You clicked the button!");
}; */
/* 
document.querySelector('#demo1').addEventListener('click',getEvent);
function getData(){
    alert("You clicked the button!");
};

function getEvent(event){
    console.log(event.target);
}; */

/* document.querySelector('#demo').addEventListener('submit',function(event){ 
    console.log('123');
event.preventDefault(); // return false;
 });
 */
//=============DOM Create Elements=================

/* var myDiv = document.createElement("h4"); */
/* myDiv.setAttribute("id","pen");
myDiv.setAttribute("class","hello"); */
/* myDiv.id="pen";
myDiv.className="hello";
myDiv.innerHTML="this is created by js "; */
/* document.body.appendChild(myDiv); */
/* document.querySelector(".test").append(myDiv);
 */

/* document.querySelector("#Red").onclick = function(){
    document.querySelector('#word').style.color="red";
}; */

document.querySelectorAll(".color").forEach(function(item){
item.onclick = function(){
document.querySelector('#word').style.color=item.dataset.colors;
document.querySelector('#word').style.textAlign=item.dataset.align;
}
});







document.querySelector('#form-valid').addEventListener('submit', function(e){
    e.preventDefault(); 

    var works = document.querySelector('#works').value.trim();
    if(works === ""){
        alert("Please enter your value!");
        return;
    }

    var result = document.querySelector('#result');

    // Create li with flex for text and icon
    var myLi = document.createElement('li');
    myLi.style.display = "flex";
    myLi.style.justifyContent = "space-between";
    myLi.style.alignItems = "center";
    myLi.style.padding = "5px 10px";
    myLi.style.borderBottom = "1px solid #ccc";

    myLi.innerText = works;

    // Create checkbox
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.style.marginRight = "10px";

// Wrap text in a span
var textSpan = document.createElement('span');
textSpan.textContent = works;

// Strike-through text when checked
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        textSpan.style.textDecoration = "line-through";
        textSpan.style.color = "#777";
    } else {
        textSpan.style.textDecoration = "none";
        textSpan.style.color = "#000";
    }
});

// Clear existing text in li and append checkbox + span
myLi.innerText = ""; 
myLi.appendChild(checkbox);
myLi.appendChild(textSpan);


    var myIcon = document.createElement('button'); 
    myIcon.className = "cancel btn btn-danger";
    myIcon.style.cursor = "pointer";
    myIcon.innerHTML = "&times;"; 

  
    myIcon.addEventListener('click', function(){
        myLi.remove();
    });

    myLi.appendChild(myIcon);
    result.appendChild(myLi);

    document.querySelector('#works').value = ""; 
});



