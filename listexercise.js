const totalChoices = 10;
const maxValue = 100;

const odds = new List();

const evens = new List();

for (let i = 0; i < totalChoices; i++) {

	const choice = Math.floor(Math.random()* maxValue);

	if (choices %2 == 0) {
		evens.append(choice);
	} else {
		odd.append(choice);
	}
}

//AS IT STANDS THIS WILL NOT RUN IN JS -> It does follow the list ADT but there is no list datatype pre written in JS.
