// 동기와 비동기

// 동기 : 순서대로 실행 
// 여러개의 작업을 순서대로 작업하는것.

// 동기 방식에 치명적인 단점 : 시간이 길어진다.

// 자바스크립트 엔진에는 쓰레드가 1개 밖에 없음.

// 비동기 : 동기적이지 않다는 뜻, 작업을 순서대로 처리하지 않음.

console.log(1);

setTimeout(()=> {
    console.log(2);
}, 3000);

console.log(3);


// 자바스크립트에서는 비동기 작업들은 자바 스크립트 엔진이 아닌 Web APIs 에서 실행 됨.
