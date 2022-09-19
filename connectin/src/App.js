import React from "react";
import GetStarted from "./GetStarted";
import "./Style/App.css";
import LogIn from "./Components/Authentication/LogIn";
import SignUp from "./Components/Authentication/SignUp";
import Navbar from "./Components/Navbar";
import { Authentication } from "./Components/Data/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PrivateRoute from "./Components/PrivateRoute";
import FindEvent from "./Components/Events/FindEvent";
import Event from "./Components/Events/Event";
import Dashboard from "./Components/Dashboard/Dashboard";
import HostEvent from "./Components/Host/HostEvent";
import Upcoming from "./Components/Dashboard/Upcoming";
import Past from "./Components/Dashboard/Past";
import Hosted from "./Components/Dashboard/Hosted";
import Profile from "./Components/Dashboard/Profile";

function App() {
  return (
    <div className="App">
      <Authentication
        child={
          <Router>
            <Routes>
              <Route exact path="/" element={<GetStarted />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/findevent" element={<FindEvent />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/hostevent" element={<HostEvent />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/past" element={<Past />} />
              <Route path="/hosted" element={<Hosted />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        }
      />
      {/* <GetStarted /> */}
      {/* <LogIn /> */}
      {/* <Navbar active="find" />
      <Navbar active="host" /> */}
      {/* <Navbar active="#dash" /> */}
      {/* <SignUp /> */}
      {/* <div className="box"></div> */}
    </div>
  );
}

export default App;
