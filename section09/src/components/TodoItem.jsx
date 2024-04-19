import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeletButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        readOnly
        onChange={onChangeCheckBox}
        type="checkbox"
        checked={isDone}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toDateString()}</div>
      <button onClick={onClickDeletButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
