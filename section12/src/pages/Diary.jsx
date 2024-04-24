import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번째 Diary</div>;
};

export default Diary;
