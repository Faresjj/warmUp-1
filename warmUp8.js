//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false



function subSet(arr1, arr2){
	var res = true ;
	for(var i = 0; i<arr2.length; i++){
		if(arr1.includes(arr2[i]) ){
			 // res = res && true;
			  for(var j = arr1.indexOf(arr2[i]); j<arr2.length ; j++){

			  	if(arr1[j] === arr2[i]){
			  		res = res && true;
			  	}
			  	else {
			  		res = res && false;
			  	}
			  }
 			}
 			
			 else {
			 res = res && false;
		}
		return res;
		}

		// we check if arr 1 includes all the elements of arr2 and when we found our first element of arr2 included in one , we start iterating arr1 starting from the index of arr2 of the first element that it matches 
		//and then we make sure each element in arr2 existes in arr1 from that element on and we update the value of res  
		
	