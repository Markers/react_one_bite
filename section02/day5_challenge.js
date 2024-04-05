/*
Quiz 1. 영화 리뷰 정보 출력하기 (feat. 오펜하이머)
목표: 영화 리뷰 정보가 담긴 객체를 매개변수로 받아 출력하는 함수 printMovieReview를 완성하세요

다음 요구사항을 만족하는 코드를 작성하세요

함수 printMovieReview는 구조 분해 할당을 통해 인수로 전달된 영화 정보 객체의 프로퍼티들을 각각 제공받습니다.

매개변수로 제공된 영화 정보들을 다음과 같이 출력합니다.

영화 제목은 "제목 : {제목}" 형태로 출력합니다.

영화 개봉 연도는 "개봉 : {개봉연도}" 형태로 출력합니다.

첫 번째 리뷰어를 "첫 번째 리뷰어 : {이름}" 형태로 출력합니다.

배열의 비 구조화 할당을 이용하세요
function printMovieReview() {
  // 코드를 입력하세요 ...
}

printMovieReview({
  title: "오펜하이머",
  releaseYear: 2023,
  reviewers: ["이정환", "김효빈", "김고은"],
});

// 출력 결과 :
// 제목 : 오펜하이머
// 개봉 : 2023
// 첫 번째 리뷰어 : 이정환

printMovieReview({
  title: "웡카",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 웡카
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정

*/

function printMovieReview({title, releaseYear, reviewers}) {
  // 코드를 입력하세요 ...
  console.log("제목 :", title);
  console.log("개봉 :", releaseYear);
  const [firstReviewer = "리뷰어 미정"] = reviewers;
  console.log("첫 번째 리뷰어 :", firstReviewer);
}

printMovieReview({
  title: "오펜하이머",
  releaseYear: 2023,
  reviewers: ["이정환", "김효빈", "김고은"],
});

// 출력 결과 :
// 제목 : 오펜하이머
// 개봉 : 2023
// 첫 번째 리뷰어 : 이정환

printMovieReview({
  title: "웡카",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 웡카
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정






/*
Quiz 2. 평균 성적 출력하기
목표: 학생들의 평균 성적을 출력합니다.

다음 요구사항을 만족하는 함수 printAvgScore의 코드를 완성하세요

매개변수 students로 객체 형태의 학생 데이터를 제공받습니다.

반복문을 활용하여 모든 학생의 개별 성적 평균을 출력합니다.

"{이름}: {평균}" 형태로 출력합니다.
function printAvgScore(students) {
  // 여기에 코드를 작성하세요 ...
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
*/


function printAvgScore(students) {
  // 여기에 코드를 작성하세요 ...
  for (let studentName in students ){
    const {scores} = students[studentName];
    const avg = scores.reduce((first,second)=>first+second)/scores.length;
    console.log(`${studentName} : ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});




function testPrintMovieReview({title, releaseYear, reviewers:[first,...rest]}) {
    // 코드를 입력하세요 ...
    // console.log("제목 :", title);
    // console.log("개봉 :", releaseYear);
    // const [firstReviewer = "리뷰어 미정"] = reviewers;
    // console.log("첫 번째 리뷰어 :", reviewers[0]);
    console.log("Test")
    console.log("첫 번째 리뷰어 :", first); 
    console.log("나머지 리뷰어 :", rest); 
  }
  
  testPrintMovieReview({
    title: "오펜하이머",
    releaseYear: 2023,
    reviewers: ["이정환", "김효빈", "김고은"],
  });


  const person = {
    name:"markers",
    age:30,
  }

  const {one,two,three} = person;
  // console.log(poor, age, name);
  console.log(one,two,three);