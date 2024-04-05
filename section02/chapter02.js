// 단락 평가(short- circuit evaluation) 

function returnFalse() {
    console.log("False 함수");

    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;

}

console.log(returnFalse() && returnTrue());
console.log(" ")
console.log(returnTrue() && returnFalse());
console.log(" ")
console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(person || "person의 값이 없음 ");
}

printName();
printName({name:"이정환"});
