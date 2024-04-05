// 1. Date 객체를 생성하는 방법

let date1 = new Date(); //생성자
let date2 = new Date(1999,1,1,10,30,59); //생성자

// 2. 타임 스탬프
// 특정 시간이 "1970. 01. 01 00시 00분 00초"로 부터 몇 ms 만큼 지났는지를 의미하는 숫자량
// UTC = 1970. 01. 01 00시 00분 00초   // 협정세계시.

let ts1 = date1.getTime();
let date4 = Date(ts1);

console.log(date1, date4);

// 3. 시간 요소 추출하기

let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let miniute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, miniute, second);


// 4. 시간 수정하기

date1.setFullYear(2023);
console.log(date1); 


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
testTime = date1.toLocaleString();
console.log("test : "+ testTime)

let a_time = new Date("2023-01-01T12:00:00Z");
console.log(a_time);
console.log(a_time.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));