// Objects example
//[id, name, designation, location, salary, experience]
// [1000,'Neel','developer','kochi',25000,3]

employee={
    id:1000,
    Name:'Neel',
    desig:'developer',
    locations:'kochi',
    salary:25000,
    exp:3,
    
    
}
console.log(typeof(employee));
// console.log(employee);
console.log(employee['desig'])
console.log(employee.Name);

//Accessing keys in an object using IN Method

console.log('____________________________________');

for(key in employee){
    console.log(key);
}

// check whether 'emplocation' key is present in the given object

    if('emplocation' in employee){
        console.log('Key is available');
    
    }
    else{
        console.log('key is not available');
    }

    console.log('____________________________________');

// How to add a keyvalue pair into an object
// objectname["key"] = value

employee["emplocation"] = 'ernakulam'


console.log('____________________________________');

// Check 'gender' key in the given object if present print 'Yes' else add gender to the given object with value as male

if('gender' in employee){
    console.log("Yes Gender key is available");
}
else{
    employee["gender"] = 'Male'
}

console.log(employee);

console.log('____________________________________');

// Updating an array

employee.Name = 'Ashwin'
employee.exp+=8
console.log(employee);
console.log('____________________________________');

// Deleting a emplocation key from an object

delete employee.emplocation
console.log(employee);

console.log('____________________________________');


// Student object - get, add, update, delete