console.log("------- Ejemplo de for loop -------");
for (let i = 0; i < 5; i++) {
    console.log("for loop:", i);
}

// Ejemplo de forEach
console.log("------- Ejemplo de forEach -------");
const arrayForEach = [1, 2, 3];
arrayForEach.forEach(element => console.log("forEach:", element));

// Ejemplo de map
console.log("------- Ejemplo de map -------");
const arrayMap = [1, 2, 3];
const newArrayMap = arrayMap.map(element => element * 2);
console.log("map:", newArrayMap);

// Ejemplo de filter
console.log("------- Ejemplo de filter -------");
const arrayFilter = [1, 2, 3, 4, 5];
const newArrayFilter = arrayFilter.filter(element => element % 2 === 0);
console.log("filter:", newArrayFilter);

// Ejemplo de reduce
console.log("------- Ejemplo de reduce -------");
const arrayReduce = [1, 2, 3, 4, 5];
const sumReduce = arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("reduce:", sumReduce);

// Ejemplo de find
console.log("------- Ejemplo de find -------");
const arrayFind = [1, 2, 3, 4, 5];
const foundFind = arrayFind.find(element => element > 3);
console.log("find:", foundFind);

// Ejemplo de some
console.log("------- Ejemplo de some -------");
const arraySome = [1, 2, 3, 4, 5];
const hasEvenNumberSome = arraySome.some(element => element % 2 === 0);
console.log("some:", hasEvenNumberSome);

// Ejemplo de every
console.log("------- Ejemplo de every -------");
const arrayEvery = [1, 2, 3, 4, 5];
const allEvenNumbersEvery = arrayEvery.every(element => element % 2 === 0);
console.log("every:", allEvenNumbersEvery);

// Ejemplo de sort
console.log("------- Ejemplo de sort -------");
const arraySort = [3, 1, 2, 5, 4];
arraySort.sort((a, b) => a - b);
console.log("sort:", arraySort);
