import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Showcase from "./components/Showcase"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" exact>
          <Showcase />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
