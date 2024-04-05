// promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
//  효능
// 비동기작업실행 v
// 작업 상태 관리 v
// 작업 결과 저장 v
// 작업 병렬 실행
// 작업 다시 실행...

// promise 3가지 상태
// 대기(pending) : 아직 작업이 완료되지 않은 상태
//해결 resolve -> 성공(fulfilled) : 비동기 작업이 성공적으로 마루리 된 상태
//거부 reject ->  실패(Rejected) : 비동기 작업이 실패한 상태


function add10(num){
    const promise = new Promise((reslove, reject)=>{
        // 비동기 작업 실행하는 함수
        // executor 라고 부름.
    
        setTimeout(()=>{
    
            if(typeof num == "number") {
                reslove(num+10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        },2000);
    });

    return promise;
}


add10(0)
.then((result)=> {
    console.log(result);
    return add10(result);
})
.then((result)=>{
    console.log(result);
    return add10(undefined);
})
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

/*
// 성공할때만 then 실행
promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    // promise chaining
// 실패할때만 catch
    console.log(error);
});

*/