import { ContactDispatchContext } from "../App";
import "./ContactItem.css";
import { memo, useContext } from "react";

function ContactItem({ id, name, email }) {
  console.log("contactItem 호출");

  const { onDelete } = useContext(ContactDispatchContext);
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={onClickDeleteButton}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
