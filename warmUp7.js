// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

//1--------------------------
function combine(first,last){
	return first+" "+last;
} 

//2---------------------------
function multipleOf3(number){
	return number % 3===0;
}

//3----------------------------
function averageAge(array){
	var sum=0;
	for(let age of array){
		sum=sum+age;
	}
	return sum/array.length;
}
//4-----------------------------
function ageToSecond(age){
	return age*365*24*60*60;
}