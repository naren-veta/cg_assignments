function calcQ1() {
	let num = parseInt(document.getElementById("num").value);
	let sum = 0;
	for (let index = 1; index <= num; index++) {
		sum += index;
	}
	document.getElementById(
		"result"
	).innerHTML = ` The sum of 1 to ${num} is ${sum}`;
}

function calcQ2() {
	let num = parseInt(document.getElementById("num").value);
	let sum = 0;
	for (let index = 1; index <= num; index++) {
		if (index % 3 == 0 || index % 5 == 0) sum += index;
	}
	if (sum > 0) {
		document.getElementById(
			"result"
		).innerHTML = ` The sum of 1 to ${num} is ${sum}`;
	} else {
		document.getElementById(
			"result"
		).innerHTML = ` No multiples of 3 or 5 in the range 1 to ${num}`;
	}
}

function calcQ3() {
	let num = parseInt(document.getElementById("num").value);
	let result = oddEven(num);
	document.getElementById(
		"result"
	).innerHTML = ` The given number is <b> ${result} </b> number`;
}

function oddEven(num) {
	return num % 2 == 0 ? "Even" : "Odd";
}

function calcQ4() {
	let num = parseInt(document.getElementById("num").value);
	let heads = 0;
	for (let i = 1; i <= num; i++) {
		if (Math.random() >= 0.5) heads++;
	}
	let frac_heads = heads / num;

	document.getElementById(
		"result"
	).innerHTML = ` The given fraction of heads = <b>${
		Math.round(frac_heads * 100) / 100
	} </b> `;
}


function calcQ7() {
	let num = parseInt(document.getElementById("num").value);
	
	document.getElementById(
		"result"
	).innerHTML = ` The given dollars is equivalent to :-<br> ${ num*74.28} INR <br> 
    ${ num*109.14} JP Yen<br>
    ${ num*0.84} Euro <br>
    ${ num*72} Pound sterling `;
}

function calcQ16(){
let rows=window.prompt("No. of rows required");
let cols=window.prompt("No. of colss required");
let para=document.createElement('p');
let div1=document.getElementById("tb");
div1.appendChild(para);
para.innerHTML= ` <h2>Rows ${rows} and Cols${cols}</h2>`

let tbl= document.createElement('table');
tbl.setAttribute('border','2')
let tbody=document.createElement('tbody');
for (let i = 0; i < rows; i++)
{
	let tr = document.createElement('tr');
	for(let j=0;j<cols;j++){
		let td = document.createElement('td');
		td.appendChild(document.createTextNode(`${i+1},${j+1}`));
		tr.appendChild(td);
	}
	tbody.appendChild(tr)
}
tbl.appendChild(tbody);
div1.appendChild(tbl)

}