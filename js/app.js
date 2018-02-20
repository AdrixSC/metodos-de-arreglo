/////////////////////  FOREACH  ////////////////////////////
var numbers = [1, 2, 3, 4];//variable para todas las funciones(excepto para sort);

function myForEach(array) {
    for (var i = 0; i > numbers.lenght; i++) {

    };
    console.log(numbers);
    console.log(numbers[0]);
    console.log(numbers[1]);
    console.log(numbers[2]);
    console.log(numbers[3]);
};

myForEach(numbers);


/////////////////////  MAP  ////////////////////////////

let numDuplicate = [];

function myMap(array) {
    for (var i = 0; i < numbers.length; i++) {
        numDuplicate[i] = numbers[i] * numbers[i]
    };
    console.log(numDuplicate);
};

myMap(numbers);

/////////////////////  FILTER  ////////////////////////////

var numFiltered = [];

function myFilter(array) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 2) {
            numFiltered[i] = numbers[i]
        };
    };
    console.log(numFiltered);
};

myFilter(numbers);

/////////////////////  REDUCE  ////////////////////////////

var total = 0

function myReduce(array) {
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i]
    };
    console.log(total);
};

myReduce(numbers);

/////////////////////  SORT  ////////////////////////////

var letters = ['a', 'e', 'b', 'd', 'c'];
var arrayDisorganized = [];
var arrayOrganized = [];

function mySort(array) {
    for (var i = 1; i < letters.length; i++) {
      console.log("indice i", letters.length);
        for (var j = 0; j < (letters.length - i); j++) {
          console.log("indice j", letters.length - i);
           if (letters[j] > letters[j + 1]) {
                k = letters[j + 1];
                letters[j + 1] = letters[j];
                letters[j] = k
            };
        };
    };
    return letters;
};

for (var i = 0; i < letters.length; i++) {
    arrayDisorganized.push(letters[i])
};
console.log(arrayDisorganized);
arrayB = mySort(letters);
for (i = 0; i < arrayB.length; i++) {
    arrayOrganized.push(arrayB[i])
};
console.log(arrayOrganized);
