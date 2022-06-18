export function mekePerson(name: string , age: number){
    return {name:name ,age:age}
}
export function testMakePerson(){
    console.log(
        mekePerson('Jane' , 22),
        mekePerson('Jack' , 22)

    )
}