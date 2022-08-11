// Iteration 1: Names and Input
let hacker1 = "javier";
console.log(`the drivers name is ${hacker1}`)
let hacker2 = "Jose"
console.log(`the navigator name is ${hacker2}`)
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`the driver has the longest name, It has ${hacker1.length} character`);
    
}else if(hacker1.length < hacker2.length){
    console.log(`the navigator has the longest name, It has ${hacker2.length} character`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} character`)
}
// Iteration 3: Loops
let mayus = ""
for(let i=0; i < hacker1.length; i++){
mayus += hacker1[i].toUpperCase() + " "
}
console.log(mayus)

let reves = ""
for(let i=hacker1.length-1; i >= 0; i--){
    reves += hacker1[i]
    }
    console.log(reves)
    //hacker2 = "alejandra"
    let comparate = hacker1.localeCompare(hacker2)
    if(comparate === -1){
        console.log(`The ${hacker1} name goes first.
        `)
    } else if(comparate === 1) {
        console.log(`The ${hacker2} goes first definitely.
        `)
    } else {
        console.log('What?! You both have the same name?')
        
    }
    
    
   



  //console.log("i am ready")


