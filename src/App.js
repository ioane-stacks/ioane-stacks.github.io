import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';

function App() {
  //I wrote this for Handle-Reload situations while project is uploaded on Github, when page reloading from browser-
  //reload button, the browser sends request to wrong address which has not a correct direction of the default page, 
  //that is why it returns response with 404 code, so i decided to check if page is reloaded, then it locates automatically
  //to the default page of Home "/";
  const [reloadType] = useState(performance.navigation.type);
  const [hostName] = useState(window.location.hostname)
  console.log(hostName);
  useEffect(() => {
    hostName !== "localhost" ?
      reloadType === 1 ? window.location.href = "/Donuts-Market/" : console.log("Everything Works!")
    : console.log("Everything Works!");
  }, [reloadType]);


  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Donuts-Market/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
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
