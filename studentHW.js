// Student object - get, add, update, delete

student = {
    id:[102,103],
    name:'Ashwin',
    class: 7,
    division:'A'
}

// Get
console.log(student.name);

// Add
student["Subject"] = 'Computer Maths'
console.log(student);

// Update
student.Subject = 'Commerce Maths'
console.log(student);

// Delete

delete student.id[0];
// let index = student.id.indexOf(103);
student.id.splice(student.id[0], 1);

console.log(student);