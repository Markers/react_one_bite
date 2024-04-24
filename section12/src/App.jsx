import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  const nav = useNavigate();

  const onClickButton = () => nav("/new");

  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/New"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
        <Link to={"/Edit"}>Edit</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;