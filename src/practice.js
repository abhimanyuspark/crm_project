const array = [63, 12, 13, 4444, "Abhi", "Vasu", "Sir", "", true, false];

let number = 0;
let numberLens = 0;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (typeof element === "number") {
    number += element;
    numberLens++;
  }
}

console.log(number + " / " + numberLens);