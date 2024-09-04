import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button'

function App() {

  return (
    <>
    <Button text={"메일"} color={"blue"}/>
    <Button text={"카페"}/>
    <Button text={"블로그"} 
   ><div>엄준식</div></Button>
    </>
  )
}

export default App
