import Chance from "Chance";
const change = new Chance();

/* chance를 이용해 무작위 이름을 생성해 반환 */
export function getRandomName() {
  return change.name({
    middle:false,
    prifix:false,
    gender:"male",
    nationality:"en",
  });
}

/* chance를 이용해 무작위 이메일을 생성해 반환 */
export function getRandomEmail() {
  return change.email({domain:"gmail.com"});
}