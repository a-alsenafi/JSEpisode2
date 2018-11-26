/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function shuffler(names) {
	let randomizedArr = [];
	for (let i = 0; i < names.length ; i++)
	{
		randomizedArr[i] = names.splice(Math.floor(Math.random()*names.length),1);

	}
	return randomizedArr;
}
function pairs(names) {
  if (names === undefined) {
    return [];
  }else if (names.length %2 !== 0) //odd 
	{ let randomizedArr = shuffler(names);
    let numOfPairs = ((randomizedArr.length - 1) / 2 )+ 1;
		let pairedArr = [];
		let counter = 0;
		for (let i = 0; i < randomizedArr.length; i = i +2) {
			
				if (randomizedArr[i+1] !== undefined) {
				pairedArr[counter] = [randomizedArr[i], randomizedArr [i+1]];
				} else{
					pairedArr[counter] = [randomizedArr[i]];
				}
				
				counter = counter + 1;
			}
			return pairedArr;
		

	} else if (names.length %2 === 0) {
    let randomizedArr = shuffler(names);
		let numOfPairs = randomizedArr.length /2 ;
		let pairedArr = [];
		let counter = 0;
		for (let i = 0; i < randomizedArr.length; i = i +2) {
				pairedArr[counter] = [randomizedArr[i], randomizedArr [i+1]];
				counter = counter + 1;
			}
			
			return pairedArr;
	} else {
    return [];
  }
}

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

console.log(pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']));
