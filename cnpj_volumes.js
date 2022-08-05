//Função que co
let object1 = {"arrayNotes":["6546513","65121356","123456", "6546565"]};

let object2 = {"arrayVolumes":["2","1","8", "5"]};



function run9(obj1, obj2){
	let lengthObject1 = obj1;
	lengthObject1 = lengthObject1.arrayNotes.length;

	let lengthObject2 = obj2;
	lengthObject2 = lengthObject2.arrayVolumes.length;

	let arr = [];
	for(i = 0; i < lengthObject1 && i < lengthObject2; i++){

		let result = obj1.arrayNotes[i];
		let vol = obj2.arrayVolumes[i];
		newObj = {result, vol};
		arr.push(newObj);

	};

	let finish = arr.map(function(item, index){
			return (`${index + 1}. Nº. nota: ${item.result} -> Volume: ${item.vol}\n`)
		})
	finish = finish.join('');

	return finish;
};

//console.log(run9(object1, object2));

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(element){
    console.log(element)
});