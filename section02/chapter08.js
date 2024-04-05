// 배열 메서드, 순회와 탐색

// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행하는 메서드

let arr1 = [1,2,3];

arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item*2); 
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item*2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드

let arr2 = [1,2,3];
let isInclude = arr2.includes(3);


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 찾으려는 값이 여러개 있다면 제일 처음 찾는 값을 반환
// 없다면 -1
// 얕은 비교로 찾아서(참조되는 위치) 배열 요소가 객체일때는 원하는 결과를 얻지 못한다.


let arr3 = [1,2,3];
let index = arr3.indexOf(20);

let OjbectArr = [
    { name: "markers" },
    { name: "홍길동" },
];

// console.log(OjbectArr.indexOf((item) => item.name === "홍길동") );
// console.log(OjbectArr.findIndex((item) => item.name === "홍길동") );

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 깊은 비교 (값으로 요소를 찾기 때문에) 배열 요소가 객체일 때 원하는 결과를 얻을 수 있다.

let arr4 = [1,2,3];
const finedIndex = arr4.findIndex((item)=> item % 2 !== 0);



// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name:"markers"},
    {name:"홍길동"},
];

const finded = arr5.find((item) => item.name === "홍길동" );

console.log(finded);
