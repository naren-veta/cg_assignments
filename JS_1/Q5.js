function listOfLeaps() {
	let next_year = new Date().getFullYear() + 1;
	let count = 0;
	let list_leaps = [];
	while (count < 20) {
		if (next_year % 4 == 0) {
			if (next_year % 100 == 0) {
				if (next_year % 400 == 0) {
					list_leaps.push(next_year);
					count++;
					next_year++;
					continue;
				} else {
					next_year++;
					continue;
				}
			} else {
				list_leaps.push(next_year);
				count++;
				next_year++;
				continue;
			}
		} else {
			next_year++;
		}
	}
	console.log(` The next 20 leap years are = ${list_leaps.join(", ")}`);
}
listOfLeaps();