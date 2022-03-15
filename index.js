// Code your solution in this file!
const returnFirstTwoDrivers = function (inputArray) {
    return inputArray.slice(0,2)
}

const returnLastTwoDrivers = function (inputArray) {
    return inputArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    let fareMultiplier = fare => fare*multiplier
    return fareMultiplier
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers,f) {
    return f(drivers);
}