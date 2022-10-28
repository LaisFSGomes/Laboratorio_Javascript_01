console.log("hello world");
// 01
const isOrNotArray = (a) => {
  return Array.isArray(a);
};
// 02
const cloneArray = (a) => {
  let clone = [];
  a.map(item => {
    clone.push(item);
  });
  return clone;
};
// 03
const firstElements = (array, n) => {
  n = n || 1;
  return array.slice(0, n);
};
// 04
const lastElements = (array, n) => {
  n = n || 1;
  return array.slice(-n);
};
// 05
const convertToString = (array) => {
  return array.join("");
};
// 06
const lineBetweenEvenNumbers = (number) => {
  let arrayNumber = number.toString().split("");
  let finalArray = [];
  for (i = 0; i<arrayNumber.length; i++){
    if (((arrayNumber[i] % 2) === 0 ) && ((arrayNumber[i+1] % 2) === 0)) {
      finalArray.push(arrayNumber[i]);
      finalArray.push("-");
    } else {
      finalArray.push(arrayNumber[i]);
    }
  }
  return finalArray.join("");
};
// 07
const highestFrequency = (array) => {
  let bigger;
  let highest = -1;
  let number;
  for (i = 0; i<array.length; i++) {
    bigger = 1;
    for (j=i+1; j<array.length; j++) {
      if (array[i] == array[j]){
        bigger ++;
        if (highest < bigger) {
          highest = bigger;
          number = array[i];
        }
      }
    }
  }
  return number;
};
// 08
const removeDuplicates = (array) => {
  arrayString = [];
  array.map(item => {
    arrayString.push(item.toString());
  });
  for (i=0; i<arrayString.length; i++) {
    for (j=i+1; j<arrayString.length; j++) {
      if (arrayString[i].toLowerCase() === arrayString[j].toLowerCase()) {
        arrayString.splice(j, 1);
      }
    }
  }
  return arrayString;
};
// 09
const sumArrays = (array1, array2) => {
  if(array1.length > array2.length){
    for (i in array2) {
      array1[i] = array1[i] + array2[i];
    }
    return array1;
  } else {
    for (i in array1) {
      array2[i] = array2[i] + array1[i];
    }
    return array2;
  }
};
// 10
const stackArray = (stack, add) => {
  for (i in add) {
    stack.push(add[i]);
  }
  return stack;
};
// retornando as funções
console.log("01:");
console.log("isOrNotArray(3) = " + isOrNotArray(3));
console.log("isOrNotArray([1, 4, 2]) = " + isOrNotArray([1, 4, 2]));

console.log("\n02");
console.log(`cloneArray(["React", "Redux", "MUI"]) = ` + cloneArray(["React", "Redux", "MUI"]));
console.log(`cloneArray([1, 2, 3, 4, 5]) = ` + cloneArray([1, 2, 3, 4, 5]));

console.log("\n03");
console.log("firstElements([10, 3, 100, 10, 1, 10]) = " + firstElements([10, 3, 100, 10, 1, 10]) );
console.log("firstElements([10, 3, 100, 10, 1, 10], 2) = " + firstElements([10, 3, 100, 10, 1, 10], 2) );

console.log("\n04");
console.log("lastElements([10, 3, 100, 10, 1, 10]) = " + lastElements([10, 3, 100, 10, 1, 10]));
console.log("lastElements([10, 3, 100, 10, 1, 10], 2)" + lastElements([10, 3, 100, 10, 1, 10], 2));

console.log("\n05");
console.log(`convertToString(["j", "a", "v", "a"]) = ` + convertToString(["j", "a", "v", "a"]));

console.log("\n06");
console.log("lineBetweenEvenNumbers(12433622) = " + lineBetweenEvenNumbers(12433622));

console.log("\n07");
console.log("highestFrequency([10, 3, 1, 10, 3, 10]) = " + highestFrequency([10, 3, 1, 10, 3, 10]));

console.log("\n08");
console.log("removeDuplicates([10, 4, 10, 4, 1, 5]) = " + removeDuplicates([10, 4, 10, 4, 1, 5]));
console.log(`removeDuplicates(["Lais", "Luan", "lais"]) = ` + removeDuplicates(["Lais", "Luan", "lais"]));

console.log("\n09");
console.log("sumArrays([3, 6, 9], [2, 4, 6]) = " + sumArrays([3, 6, 9], [2, 4, 6]));

console.log("\n10");
console.log("stackArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) = " + stackArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));