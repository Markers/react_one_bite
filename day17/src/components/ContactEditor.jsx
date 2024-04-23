import { useState, useRef, memo, useContext } from "react";
import "./ContactEditor.css";
import { ContactDispatchContext } from "../App";

function ContactEditor() {
  const nameRef = useRef();
  const emailRef = useRef();
  const { onCreate } = useContext(ContactDispatchContext);

  console.log("ContactEditor 호출");

  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const onButtonClick = () => {
    if (contact.name === "") {
      nameRef.current.focus();
      return;
    }
    if (contact.email === "") {
      emailRef.current.focus();
      return;
    }
    onCreate(contact.name, contact.email);
    setContact({ name: "", email: "" });
  };

  const onChangeContact = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          value={contact.name}
          ref={nameRef}
          onChange={onChangeContact}
          className="name"
          placeholder="이름 ..."
        />
        <input
          name="email"
          ref={emailRef}
          value={contact.email}
          onChange={onChangeContact}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onButtonClick}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
