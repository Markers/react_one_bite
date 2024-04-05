// 1. if 조건문

let num = 10;

if (num >= 10) {
    // console.log("Num은 10 이상 입니다.");
    // console.log("참입니다");
} else if( num >= 5) {
    // console.log("num은 5 이상입니다 ");
} 
else {
    // console.log("조건이 거짓입니다!");
}


// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if 보다 더 직관적.

let animal = "cat";

switch( animal ) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("dog");
        break;
    }
    case "bear": {
        console.log("bear");
        break;
    }
    case "snake": {
        console.log("snake");
        break;
    }
    case "tiger": {
        console.log("tiger");
        break;
    }
    default:{
        console.log("there is no animal");
    }
}

