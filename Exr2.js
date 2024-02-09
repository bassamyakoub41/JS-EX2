// _________________Array Ex__________________

// ex1
// let arr = [5, 3, 8, 1]
// let newArr= arr.filter(e=> e>0 && e<5)
// console.log(newArr)
// console.log(arr)

// ex2
// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 } 
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = users.map(e=>e=e.name)
// console.log(names)
// // alert( names ) 

// / ex3

//   let john = { name: "John", age: 25 }
//   let pete = { name: "Pete", age: 30 } 
//   let mary = { name: "Mary", age: 29 }
//  let users = [john, pete, mary]

//  function getAverageAge(users){
//     if(users.length===0){
//         return 0 
//     }
//     let sumAge=users.reduce((sum ,user)=> sum + user.age, 0);
//     let ave= sumAge / users.length;
//     return ave
    
//  }
//  console.log(getAverageAge(users))
