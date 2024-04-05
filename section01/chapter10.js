// 반복문 for
/*
초기식 : 선언 및 초기화
조건식 : 참일 경우에 계속 반복
for (초기식 : 조건식 : 증감식) {
    console.log("반복!");
}
*/

for (let idx=0; idx < 10; idx++){
    if( idx % 2 === 0 ) {
        continue; //만나게 되면 다음 루프로 넘어감
    }
    console.log("반복!");

    if ( idx >= 5) {
        break; // 만나게 되면 바로 중지
    }
}