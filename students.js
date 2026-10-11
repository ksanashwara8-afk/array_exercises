function findStudents(array) {
    const names = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].marks > 70) names.push(array[i].name);
    }
    return names;
}
const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];
console.log(findStudents(students));
