type RandIntType = (min: number, max: number) => number;

const randint:RandIntType = (min: number, max: number) => {
    return min + Math.round((Math.random() * max - min));
}

const myNumber: number = randint(1, 100);

let a: number = 0
let pokus: number = 1

while(a != myNumber) {
    a = Number(prompt("Enter a number"))

    if (Number.isNaN(a)) {
        console.log("Enter a NUMBER!!!!!!")
        console.log("NUMBER!!!!!")
        console.log("STUPID")
    }
    if (a === myNumber) {
        console.log("Correct" , "On the " , pokus , " try")
    } else {
        if (a > myNumber) {
            console.log(a,"Too High")
            pokus +=1
        } else {
            console.log(a,"Too Low")
            pokus +=1
        }
    }
}
