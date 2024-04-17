import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년원일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("kr");
  // const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef();
  const inputRef = useRef();

  const onChangeInput = (e) => {
    // console.log(e.target.name, e.target.value);
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      console.log(inputRef);
      inputRef.current.focus();
    }
  };

  /*
  const onChangeName = (e) => {
    // setName(e.target.value)

    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onchangeBirth = (e) => {
    // setBirth(e.target.value)
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onchangeCountry = (e) => {
    // setCountry(e.target.value)
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onchangeBio = (e) => {
    // setBio(e.target.value)
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  */

  return (
    <div>
      <div>
        <input
          name="name"
          ref={inputRef}
          onChange={onChangeInput}
          placeholder={"이름"}
          value={input.name}
        ></input>
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChangeInput}
          type="date"
        />
        {input.birth}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChangeInput}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChangeInput} />
      </div>

      <div>
        <button onClick={onSubmit}>제출</button>
      </div>
    </div>
  );
};

export default Register;
