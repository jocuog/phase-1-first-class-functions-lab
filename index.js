const drivers = ['driver1', 'driver2', 'driver3', 'driver4'];

const returnFirstTwoDrivers = function(driverArr)  {
    return driverArr.slice(0,2)
}

const returnLastTwoDrivers = function(driversArr) {
    return driversArr.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function(int) {
    return function (fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)


const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArr, cb) {
    return cb(driverArr)
}


















// // Code your solution in this file!
// const drivers = ["driver", "driver1", "driver2", "driver3"];

// //const returnFirstTwoDrivers = function(driversArr) {
//     //return driversArr.slice(0, 2);
// //}

// const returnFirstTwoDrivers = (driversArr) => {
//     return driversArr.slice(0,2)
// }

// //function returnFirstTwoDrivers(driversArr) {
//  //   return driversArr.slice(0,2);
// //}

// // function returnLastTwoDrivers(driversArr1) {
// //     return driversArr1.slice(2,4);
// // }

// const returnLastTwoDrivers = (driversArr1) => {
//     return driversArr1.slice(-2)
// }

// let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// function createFareMultiplier(int) {
//     return function(fare) {
//         return fare * int;
//     }
// }

// // function fareDoubler() {
// //     return createFareMultiplier(2);
// // }

// const fareDoubler = createFareMultiplier(2)

// // function fareTripler() {
// //     return createFareMultiplier(3);
// // }

// const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
//     return returnFirstTwoDrivers(arrayOfDrivers);
// }

