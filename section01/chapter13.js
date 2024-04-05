// 콜백함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함

function main(value) {

    console.log(value);
}


main(() => {
    console.log("i am sub");
});

// 2. 콜백함수의 활용

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});