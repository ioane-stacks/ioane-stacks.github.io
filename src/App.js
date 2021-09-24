import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Blog/:id">
              <Blog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
