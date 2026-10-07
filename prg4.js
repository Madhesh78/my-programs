// Complete the function using object destructuring.

function getStudentDetails(students) {
    return students.map(({ name, age, grade }) => {
        return `Name: ${name}, Age: ${age}, Grade: ${grade}`;
    });
}
const students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" }
];

console.log(getStudentDetails(students));