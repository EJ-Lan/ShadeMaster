// Get reference to the <h3> element
var css = document.querySelector("h3");

// Get references to color input elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Get reference to the body element
var body = document.getElementById("gradient");

// Function to set the gradient based on color input values
function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

// Add event listeners to color input elements
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);