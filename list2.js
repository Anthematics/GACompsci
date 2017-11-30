
class List {
	constructor(size) {
		 var DEFAULT_SIZE = 10;

		 this.data = new Array(DEFAULT_SIZE);
			 this.size = 0;
	}

	append(item) {
		if (this.size >= this.data.length) {
			this.growArray();
			console.log("Fixed size array grew from" + this.size + "to" + this.data.length);
		}
			this.data[this.size] = item;
			this.size++;
	}

	growArray() {
		const newArray = new Array(this.data.length * 2);

		for (let i = 0; i < this.data.length; i++) {
			newArray[i] = this.data[i];
		}
		this.data = newArray;
	}
	get(index){
		return this.data[index];
		console.log("returning index")
	}
}

const myList = new List();

myList.append("yay!");
for (let i = 0; i < 100; i++) {
	myList.append(i);
}

console.log("Total size", myList.size);
for (let i = 0; i < myList.size; i++) {
	let value = myList.get(i);
	console.log(value, "at index", i);
}
