import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Showcase from "./components/Showcase"

<<<<<<< HEAD
// Pages
import AvailableRooms from "./pages/AvailableRooms"
import Error from "./pages/Error"

=======
>>>>>>> abbe3da91fc96de43745ce84cd0360c387c65395
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" exact>
          <Showcase />
        </Route>
<<<<<<< HEAD
        <Route path="/available-rooms">
          <AvailableRooms />
        </Route>
        <Route path="*">
          <Error />
        </Route>
=======
>>>>>>> abbe3da91fc96de43745ce84cd0360c387c65395
      </Switch>
    </Router>
  )
}

export default App
