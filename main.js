//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
 function faveFoods(person){
    for(let i = 0; i < Object.values(person).length; i++){
    console.log(Object.values(person)[i])
    }
 }
 faveFoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name,age){
    this.name = name;
    this.age = age;
// Use an arrow to create the printInfo method
    this.printInfo= () =>{
        console.log(`${this.name} is ${this.age} years old`)
    };

    this.incrementAge = () =>{
        this.age+= 1;
    };
    this.addAge = (ageAdd) =>{
        this.age+= ageAdd
    };
}

// Create our Person Prototype
let david= new Person('David',30)
let linda= new Person('Linda',32)


david.printInfo()
linda.printInfo()
linda.incrementAge()
linda.printInfo()
linda.incrementAge()
linda.printInfo()
linda.incrementAge()
linda.printInfo()
david.addAge(10)
david.printInfo()





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isString10 = (string) => {
    return new Promise( (resolve, reject)=> {
      if (string.length>= 10){
        resolve(true)
      } else{
        reject(false)
      }
    })
}
isString10(" short")

.then((result)=> {
    console.log( "Big Word")
})
.catch((error)=>{
    console.log('small number')
})
