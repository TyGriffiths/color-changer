var autoButtons = ["Orange", "Blue"];
var buttonOptions = ["Pink", "Green", "Purple", "Black", "Grey", "Yellow"];
var buttonMaker = document.getElementById("makeButtons");
var dropdownMaker = document.getElementById("dropdownItems");

//add autoButtons
refreshButtons();
function refreshButtons() {
	buttonMaker.innerHTML = '';
	for (var i = 0; i < autoButtons.length; i++) {
		var makeAutoButton = document.createElement("button");
		makeAutoButton.innerHTML = autoButtons[i];
		makeAutoButton.setAttribute('onclick', 'changeColor(\''+autoButtons[i]+'\')');
		buttonMaker.appendChild(makeAutoButton);
		buttonMaker.appendChild(makeAutoButton).style.backgroundColor = autoButtons[i];
		buttonMaker.appendChild(makeAutoButton).className += "btn top-buttons";
	}
}

//adding dropdown items
function dropdownItems() {
	for (var i = 0; i < buttonOptions.length; i++) {
		var makeDropdownItem = document.createElement("option");
		makeDropdownItem.innerHTML = buttonOptions[i];
		dropdownMaker.appendChild(makeDropdownItem);
	}
}
dropdownItems();

//adding color buttons
function addColor() {
	var grabListValue = dropdownMaker.value;
	autoButtons.push(grabListValue);
	refreshButtons();	
}

//change colorCircle background color 
function changeColor(color) {
	document.getElementById("colorCircle").style.backgroundColor = color;
}

function removeColor() {	
	var temp = document.getElementById("colorCircle");
	var buttonColor = document.getElementById("colorCircle").style.backgroundColor;
	for (var i = autoButtons.length - 1; i >= 0; i--) {
		if (autoButtons[i].toLowerCase() === buttonColor) {
			autoButtons.splice(i, 1);
			changeColor("White");
			refreshButtons();
		}
	}
}