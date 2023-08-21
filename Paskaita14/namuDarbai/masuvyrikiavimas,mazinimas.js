// masyvu rikiavimas
const draugai = ["Justas", "Danielius", "Paulius", "Motiejus"];

draugai.sort();
// console.log(draugai);
// 2pratimas

const draugaiSorted = draugai.sort((a, b) => {
  //   console.log(a.charCodeAt(0), a, b.charCodeAt(0), b);
  if (a.charCodeAt(0) < b.charCodeAt(0)) {
    return 1;
  } else {
    return -1;
  }
});
// console.log(draugaiSorted);

// 3pratimas

const skaiciai = [5, 10, 20, 11, 12, 1, 0, 14, 25];

const skaiciaiSorted = skaiciai.sort((a, b) => b - a);
// console.log(skaiciaiSorted);

// 4pratimas

const numbers = [10, 5, 20, 4];

const numbersSorted = numbers.sort((a, b) => b - a);
// console.log(numbersSorted[0]);

// masyvu mazinimas

const megstamiausi = [8, 7, 11, 4, 24];

const megstamiausiSudeti = megstamiausi.reduce((a, v) => a + v);
// console.log(megstamiausiSudeti);

const masinos = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

const trysmasinos = masinos.reduce((a, v) => {
  if (v.length === 3) {
    a.push(v);
  }

  return a;
}, []);
// console.log(trysmasinos);

const daug = [1, 5, 7, 444, 55, 77, 98, 354];

const didziausiasDaug = daug.reduce((a, v) => (a > v ? a : v));
// console.log(didziausiasDaug);

const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

const pilnameciai = people.filter((a) => a.age >= 18);
console.log(pilnameciai.map((person) => person.name));
