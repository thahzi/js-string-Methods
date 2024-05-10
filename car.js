var car = {
    name: 'baleno',
    model: 'hatch back',
    manufacturer: 'maruti',
    price:'10lakh'
}

// print model and manufacturer name of the given car
// add variant key to the car object with value has 'manuel'
// to add a new value 'automatic' to the key variant
// to add a new key as colour with value as red, blue and white

console.log(`car model is : ${car.name} and Manufacturing name is : ${car.manufacturer}`);

console.log('____________________________________');

car["Variant"] = ['Manuel']

console.log(car);
console.log('____________________________________');

car.Variant[1] = 'Automatic'
// car.Variant.push = 'Automatic'

console.log(car);

console.log('____________________________________');

car["Colour"] = ['red', 'blue', 'white']
console.log(car);