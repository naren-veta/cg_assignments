//Q9. Write a function that combines two lists by alternatingly taking elements
//[a,b,c], [1,2,3]=>[a,1,b,2,c,3]

let x = ["a", "b", "c","d","e"];
let y = [1, 2, 3];
console.log(alternateInsert(x,y))

function alternateInsert(arr1, arr2) {
	let size_of_bigger = arr1.length > arr2.length ? arr1.length : arr2.length;
	let result = [];
	for (let index = 0; index < size_of_bigger; index++) {
		if (arr1[index] && arr2[index]) {
			result.push(arr1[index]);
			result.push(arr2[index]);
		} else if (arr1[index]) {
			result.push(arr1[index]);
		} else result.push(arr2[index]);
	}

	return result;
}
