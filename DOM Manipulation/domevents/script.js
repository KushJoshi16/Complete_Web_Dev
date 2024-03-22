var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



var li_ar = document.getElementsByTagName("li");

// console.log(li_ar);
function toggleListItem(event){
	event.target.classList.toggle("done");
}

function deleteListElement(event) {
	event.target.parentNode.remove();
}

function addDelBtn(elem){
	var del_btn = document.createElement("button");
	del_btn.innerHTML = "Delete";
	elem.addEventListener("click", toggleListItem);
	del_btn.addEventListener("click", deleteListElement);
	elem.appendChild(del_btn);
}

for(var i = 0;i<li_ar.length;i++){
	elem = li_ar[i];
	addDelBtn(elem);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.addEventListener("click", toggleListItem);
	li.appendChild(document.createTextNode(input.value));
	addDelBtn(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// li_ar.forEach(element => {
// 	console.log(element.classList);
// 	// element.addEventListener("click", function(){
// 	// 	console.log(element.classList);
// 	// 	// .toggle(".done");
// 	// })s
// });

// li_ar.forEach(element => {
// 	console.log("a");
// })