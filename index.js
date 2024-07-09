
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4);

}
// selectingDrivers 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers[0]);

function createFareMultiplier(multiplier){
    return function(value){
        return value * multiplier
    }
}
console.log(createFareMultiplier(5));

const fareDoubler = fare => fare * 2;

const fareTripler = fare => fare * 3;

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
     return returnFirstTwoDrivers(drivers);
}


// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 
// function ()
// const returnFirstTwoDrivers = function(drivers){
//     return drivers.slice(0, 2);
// }
// const returnLastTwoDrivers = function(drivers){
//     return drivers.slice(2, 4);
// }
// let selectingDrivers = ['returnFirstTwoDrivers', 'returnLastTwoDrivers'];

// console.log(returnFirstTwoDrivers(drivers));
// console.log(returnLastTwoDrivers(drivers));
// console.log(selectingDrivers(drivers));



// const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
// superheroes.push("mandown", "superman");
// console.log(superheroes);
