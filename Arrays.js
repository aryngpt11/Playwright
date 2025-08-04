let marks=Array(6)
var mark=new Array(20,30,40,50,60,70)

var marks2=[10,20,30,40,50,60]
console.log(marks2[0],marks2[1],marks2[2],marks2[3],marks2[4],marks2[5])
marks2[0]=100 // changes the value at index 0
console.log(marks2)

marks2.push(70) // adds 70 at the end of the array
console.log(marks2)

marks2.pop() // removes the last element of the array
console.log(marks2) 

marks2.shift() // removes the first element of the array
console.log(marks2)

marks2.unshift(5) // adds 5 at the beginning of the array
console.log(marks2)

marks2.indexOf(30) // finds the index of 30 in the array
console.log(marks2.indexOf(30))

marks2.splice(1, 2, 15, 25) // removes 2 elements starting from index 1 and adds 15 and 25
console.log(marks2)

marks2.includes(50) // checks if 50 is present in the array
console.log(marks2.includes(50))

marks2.slice(1, 3) // extracts elements from index 1 to index 3 (not inclusive)
console.log(marks2.slice(1, 3))

marks2.reverse() // reverses the array
console.log(marks2)

marks2.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // sums up all elements in the array
console.log(marks2.reduce((accumulator, currentValue) => accumulator + currentValue, 0))