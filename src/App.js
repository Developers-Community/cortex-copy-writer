import { useEffect } from "react"
import working from "./components/working"
import { BrowserRouter, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import Evaluation from "./components/Evaluation"
import ScreenWriter from "./components/ScreenWriter"
import Psychology from "./components/Psychology"
import UxWriting from "./components/UxWriting"


const App = () => {
  useEffect(() => {
    working()
  }, [])


  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/evaluation" component={Evaluation} />
        <Route exact path="/screenwriter" component={ScreenWriter} />
        <Route exact path="/psychology" component={Psychology} />
        <Route exact path="/ux-writing" component={UxWriting} />


      </div>
    </BrowserRouter>

  )
}

export default App







