var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

/////////////////////////////
//////// PROBLEM 1 //////////
/////////////////////////////

// for(var i=0; i<students.length; i++) {
// 	console.log(students[i].age);
// };



/////////////////////////////
//////// PROBLEM 2 //////////
/////////////////////////////

// for(var i=0; i<students.length; i++) {
// 	var name = students[i].name;
// 	var city = students[i].city;
// 	console.log( name.concat(', ' + city) );
// };



/////////////////////////////
//////// PROBLEM 3 //////////
/////////////////////////////

// for(var i=0; i<students.length; i++) {
// 	var name = students[i].name;
// 	var city = students[i].city;
// 	if (i == 1) {continue};
// 	if (i == 4) {continue};
// 	console.log( name.concat(' is from ' + city) );
// };



/////////////////////////////
//////// PROBLEM 4 //////////
/////////////////////////////

for(var i=0; i<students.length; i++) {
	var name = students[i].name;
	if (i==0) {continue};
	if (i==3) {continue};
	if (i==4) {continue};
	console.log( name.concat(' is older than 25') );
};















