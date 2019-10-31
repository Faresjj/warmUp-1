// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
var females = ["Ons", "Insaf", "Houda", "Hania"];
// -name of males in your class
var males = ["Jihad", "Adam", "Firas", "Omar", "Mhamed"];
// -name of your class instructors 
var instructors = ["Youssef", "Seif", "Tamara", "Matt"];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array) {
	if (array.length/2 === 1) {
		return (array.length/2) + 1;
	}
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function even(array) {
	var array = [];
	return array.length * 2;
}
