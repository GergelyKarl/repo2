import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
  <BrowserRouter>
  <NavBar />
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/post/:slug" component={SinglePost} />
    <Route path="/post" component={Post} />
    <Route path="/project" component={Project} />
  </Switch>
  
  </BrowserRouter>
  
    )
<<<<<<< HEAD
 }
=======
}
>>>>>>> eb80f0235798d19973a69408b8cf5d0fa6244eae

export default App;
