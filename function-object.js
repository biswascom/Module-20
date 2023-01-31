function doHello (num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
    // console.log (average); 
}

var netAverage = doHello(12, 44, 54);

var avg = netAverage.toFixed(2);

parseFloat.avg;

console.log (avg);

// doHello(22, 33, 32);

var student = {
    fullName: 'Nasir Uddin',
    studentId: 23,
    schoolName: 'Rifles School, Jashore',
    age: 70
}

var properties = Object.keys(student);
console.log (properties);

var values = Object.values(student);
console.log (values);

var propertyName = 'fullName';
var propertyValues = student[propertyName];
console.log (propertyName, propertyValues);

// console.log (student);
// student.fullName = 'Jasim Uddin';
// var studentName = student.fullName;
// console.log (studentName);
// console.log (student);
// student['fullName'] = 'Kamal Uddin Tuhin';
// var stName = student['fullName'];
// console.log (stName);
// console.log (student);

// var sName = 'fullName';
// student[sName] = 'Akhir Uddin';
// var sName2 = student[sName];
// console.log (sName2);
// console.log (student);