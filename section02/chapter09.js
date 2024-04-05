// 배열 메서드. 배열 변형

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
    {name:"이정환", hobby:"테니스"},
    {name:"markers", hobby:"테니스"},
    {name:"홍길동", hobby:"독서"},

];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
)


// 2. map

// 배열의 모든 요소를 순회하여, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환

let arr2 = [1,2,3];
const mapResult1 = arr2.map(
    (item, idx, arr) => {
        return item *2;
    }
);

console.log(arr2);
console.log(mapResult1);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 사전순이기 때문에 숫자를 볼땐 맨 앞의 값을 보고 하기 때문에 원하는 결과가 나타나지 않는다.
// 원본 배열을 건드린다.


let arr3 = ["a", "c", "b"]
let arr3_1 = [10,2,5]
arr3.sort();

arr3_1.sort(
    (a,b) => {
        if (a > b) {
            return 1; // -> b,a 배치
        } else if ( a < b) {
            return -1; // -> a,b 배치
        } else {
            return 0; // a,b 자리 그대로
        }
    }
);


console.log(arr3);
console.log(arr3_1);


// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드

let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ["hi", "im", "winterlood"];

const joined = arr6.join(" ");
console.log(joined);