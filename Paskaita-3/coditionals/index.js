const x = 20;
const y = 20;

if (x>y) {
    console.log("taip x yra daugiau uz y");
} else  {
    console.log("Ne x yra maziau uz y");
}

if (x === 15) {
    console.log("x yra lygu 15");
} else if (x === 20) {
    console.log("x yra 20");
} else {
    console.log("nepavyko atspeti koks yra x");
}

let kaRytApsirengti ;
const arRytSninga = false;
const arRytLyja = true;

if(arRytSninga) {
    kaRytApsirengti = "striuke";
} else if (arRytLyja) {
  kaRytApsirengti = "pasiimk sketi";
} else {
    kaRytApsirengti = "nesvarbu";
}
console.log(kaRytApsirengti);

const num = 3;
if (num === 0) {
    console.log("nei tas nei tas");
}
else if (num % 2 === 0) {
console.log("lyginis");
} else {
    console.log("nelyginis");
}

const numberStringOfMusicians = prompt('iveskite skaiciu');
const numberOfMusicians = +numberStringOfMusicians;
console.log(typeof numberOfMusicians);
console.log(numberOfMusicians);

if (numberOfMusicians === 0) {
    console.log("tai nera grupe");
} else if (numberOfMusicians === 1) {
    console.log("solo band");
} else if (numberOfMusicians === 2) {
    console.log('duo band');
} else if (numberOfMusicians === 3) {
    console.log('trio');
} else if (numberOfMusicians === 4) {
    console.log("kvartetas");
} else if (numberOfMusicians > 4) {
    console.log('didele grupe');
} else if (numberOfMusicians < 0) {
    console.log("mirus grupe");
}


switch (numberOfMusicians) {
    case 0:
        console.log("ne grupe");
        break;
     case 1:   
        console.log("solo");
        break;
        case 2:
            console.log('duo');
            break;
            case 3:
                console.log('trio');
            break;
            case 4:
                console.log('kvaretas');
            break;
            default:
                console.log("neatitinka nei vieno varianto");


    


}
