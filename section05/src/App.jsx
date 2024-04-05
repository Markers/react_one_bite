import './App.css'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from './components/Button'
// import Header from "./components/Header.jsx"


function App() {

  const buttonPorps = {
    text: "메일",
    color : "red",
    a:1,
    b:2,
    c:3,
  }

  return (
    <>
    <Button {...buttonPorps}/>
    <Button text={"카페"} />
    <Button text={"블로그"} >
      <Header />
    </Button>
    </>
  )
}

export default App
