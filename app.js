// var name1 = "Martin";
// var age = 27;
// var array1 = [3, "Tony", 43, "Star"];
// var todayMonday = false;
// var object1 = {
//     brand: "toyota",
//     model: "camry",
//     [3, 6, "today"],
//     isGrey: true,
//     year: 2020,
// };

let sentence = "Today is Friday!;"

let age = 42;

const motorcycles = ['Kawasaki', 'Yamaha', 'Suzuki', 'Honda'];

let doesThisWork = true;

const lakers = {
    headquarters: "Los Angeles",
    numberOfPlayes: 11,
    players: ['LBJ', 'Anthony Davis', 'Danny Green'],
    areChampions: true
}


// function passArray (array1) {
//     console.log('This function passes and array');

// }

// function passString(name1) {
//     console.log('I take the string and put it here: ' +name1);
// };

// function passObject(object1) {

// }

// function boolean1(ifTrue) {
//     if (if True == true) {
//         console.log(false);
//     } else {
//         console.log('false');
//     }
// }

// function sum1(numb1, numb2) {
//     return numb1 + numb2;
// }

// function multi1(numb1, numb2) {
//     return numb1 * numb2;
// }

// function substrac1(numb1, numb2) {
//     return numb1 - numb2;
// }

// function yourName(name1) {
//     console.log('Your name is : ' +name1);
// }

// function favColor(input1) {
//     console.log('your favorite color is: ' +input1)
// }

function displayCoolBikes(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let nike = array[i];

        if (displayCoolBikes.length >7) {
            result.push(bike);
        }
    }
}

function removeFromArray(callback, array) {
    let result= callback(array);
    console.log(result);
}

function printSentence(string1) {
    console.log(string1);
}

console.log(removeFromArray(displayCoolBikes, motorcycles));

function printPlayers(object) {
    console.log(object.players);
}

printPlayers(lakers);

function printEachPlayer(object) {
    object.player.forEach(eachPlayer => {
        console.log(eachPlayer);
    });
}

function doesThisReallyWork(boolean1) {
    if(boolean1) {
        console.log('this works');
    } else {
        console.log('Doesnt work');
    };

}

const sectionOne = document.getElementById('section1');
console.log(sectionOne);

const sectionTwo = document.getElementById('section2');
console.log(sectionTwo);

const sectionThree = document.querySelector('#section3');
console.log(sectionThree);

const sectionFour = document.querySelector('#section4');
console.log(sectionFour);

const sectionFive = document.querySelector('#section5');
console.log(sectionFive);

sectionOne.textContent = 'Lakers';
sectionTwo.textContent = 'Warriors';
sectionThree.textContent = 'Celtics';
sectionFour.textContent = 'Nets';
sectionFive.textContent = 'Blazers';

const paraOne = document.querySelector('.paragraph1');
console.log(paraOne);

paraOne.textContent = 'Lebron James';

const paraTwo = document.querySelector('.paragraph2');
console.log(paraOne);

paraTwo.textContent = 'Steph Curry';

const paraThree = document.querySelector('.paragraph3');
console.log(paraThree);

paraThree.textContent = 'Kemba Walker';

const paraFour = document.querySelector('.paragraph4');
console.log(paraFour);

paraFour.textContent = 'Kyrie Irving';

const paraFive = document.querySelector('.paragraph5');
console.log(paraFive);

paraFive.textContent = 'Demien Lillard';
