import './App.css'
import "./components/Welcome"
import Welcome from './components/Welcome'

function App() {
  const person = {
    name : "markers",
    isMember : true,
  }

  return (
    <>
    <Welcome {...person}></Welcome>
    </>
  )
}

export default App
