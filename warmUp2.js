// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function greatestCommonDivisor (num1,num2){
  if (num1 % num2 ===0 ){
    return num2;
  }
return greatestCommonDivisor(num2,num1%num2); 
}
function sum(num1,num2){
	if (num2===0){
		return num1
	}
return sum(num1+1,num2-1)	;
}
