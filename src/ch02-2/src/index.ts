let MAX_AGE = 100


interface IPerson{
    name: string
    age: number
}


//생성자 메소드
class Person implements IPerson{
    constructor(public name:string,public age:number){} 
}

function makeRandomNumber(max:number = MAX_AGE){
    return Math.ceil((Math.random() * max))
}


const takeMakePerson = ():void{
    let jane : IPerson = makePerson('jane')
    let jack : IPerson = makePerson('jack')
    console.log(jane , jack)
}