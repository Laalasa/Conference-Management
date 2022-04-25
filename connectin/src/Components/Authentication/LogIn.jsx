import React from "react";
import "../../Style/Forms.css";
import logo from "../../Assets/big-logo.png";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Data/auth";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user logged: ", userCredential.user);
        navigate("/findevent");
      })
      .catch((err) => {
        console.log(err.message);
        let error = document.querySelector(".error");
        error.innerHTML = `${err.message}`;
      });
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
    console.log(password);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="row">
      <div className=" m-0 col-lg-6 d-none d-lg-block bg-black text-center pt-5">
        <img src={logo} width="200" className="mt-6" alt="" />
      </div>
      <div className="col-lg-6 me-0 pe-0 text-center mt-5">
        <form action="">
          <h2 className="mt-5">Welcome Back!</h2>
          <TextField
            id="outlined-basic"
            className="text-field mt-4 mb-4"
            label="Email"
            variant="outlined"
            color="secondary"
            onChange={handleEmailChange}
          />
          <br />
          <FormControl variant="outlined">
            <InputLabel color="secondary" htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              color="secondary"
              className="text-field"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <br />
          <p className="mt-2 forgot-password">
            forgot password? <a href="#">Reset</a>
          </p>
          <div className="error"></div>
          <Link to={"/findevent"} style={{ textDecoration: "none" }}>
            <button onClick={handleSubmit} className="btn mt-4 mb-4 ctc">
              Log In
            </button>
          </Link>
          <p>
            Don't have an account?{" "}
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              {" "}
              <a href="#">Sign Up</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
