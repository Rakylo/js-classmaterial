/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(arr) {
  const key = [];
  key.push(arr.make);
  key.push(arr.model);
  key.push(arr.year);
  key.push(arr.color);
  return key;
}
const atsakymas = showObjectKeys(audi);
console.log(atsakymas);
