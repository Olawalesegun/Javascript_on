let vehicle = { wheels: 4};
let car = { seats: 4,
__proto__: vehicle,
};
let driver = {
    __proto__: car
};


console.log("car:", car);
console.log("Does car have toString? ",car.hasOwnProperty("seats"));
console.log("Car prorotype", car.__proto__);
console.log("Does car have toString? ", vehicle.__proto__);
//console.log(car.hasOwnPropery("seats"));
//console.log(car.hasOwnPropery("toString"));

console.log(car.wheels);
console.log(driver.wheels)