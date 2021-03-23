import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Showcase from "./components/Showcase"

// Pages
import AvailableRooms from "./pages/AvailableRooms"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" exact>
          <Showcase />
        </Route>
        <Route path="/available-rooms">
          <AvailableRooms />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
