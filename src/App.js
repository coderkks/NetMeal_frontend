import './App.css';
import Home from './Components/Home Page/Home';
import Login from './Components/Login Page/Login';
import AllPlans from './Components/Plans Page/AllPlans';
import About from './Components/About Page/About';
import Signup from './Components/Login Page/Signup';
import Feedback from './Components/About Page/Feedback';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from './Components/Utilities/ScrollToTop';
import Profile from './Components/Profile Page/Profile';
import ErrorPage from './Components/Authentication/ErrorPage';
import PlanDetails from './Components/Plans Page/PlanDetails';


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>} ></Route>
            <Route exact path='/login' element={<Login/>} ></Route>
            <Route exact path='/plans' element={<AllPlans/>} ></Route>
            <Route exact path='/about' element={<About/>} ></Route>
            <Route exact path='/signup' element={<Signup/>} ></Route>
            <Route exact path='/feedback' element={<Feedback/>} ></Route>
            <Route exact path='/profile' element={<Profile/>} ></Route>
            <Route exact path='/plandetails' element={<PlanDetails/>} ></Route>
            <Route path="*" element={<ErrorPage/>} ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
