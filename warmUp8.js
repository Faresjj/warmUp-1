  
  //create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i]) {
			return true;
		}
		return false;
	}
}