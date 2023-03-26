import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from './Components/Admin';
import Startpage from './Components/Startpage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Account from './Components/Account';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route element={<Admin />}  path='/admin' />
        <Route element={<Startpage />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Signup />} path="/signup"></Route>
        <Route element={<Account />} path="/account"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
