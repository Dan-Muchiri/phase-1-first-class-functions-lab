// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
   return arr.slice(0,2);
};
const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
};
let selectingDrivers = [];
selectingDrivers.push(returnLastTwoDrivers);
selectingDrivers.unshift(returnFirstTwoDrivers);
function createFareMultiplier(integer){
    return function(){
        return (integer*5);
    };
}
const doublerTripler = createFareMultiplier();
function fareDoubler(doublerTripler){
    return (2*doublerTripler);
}
function fareTripler(doublerTripler){
    return (3*doublerTripler);
}
function selectDifferentDrivers(array,driverFunction){
    return driverFunction(array);
}