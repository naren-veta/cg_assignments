let arr = [];
for (let index = 0; index < 20; index++) {
	arr[index] = Math.floor(Math.random() * 1000);
}
console.log(arr);
console.log(bubbleSorting(arr))
function bubbleSorting(arr) {
	for (let i = 0; i < arr.length; i++) {
		let anyChange = false;

		for (let j = 0; j < arr.length - 1; j++) {
            
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				anyChange = true;
			}
            
        }
        if(!anyChange)
        {break;}
        
	}
    return arr;
}

