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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { useAuthContext } from "../Data/auth";
import { Link } from "react-router-dom";
import { doc, setDoc, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [error, setError] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();
  const handleFirstChange = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastChange = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log("user created: ", cred.user.uid);
          // const userRef = doc(db, "Users", cred.user.uid);
          // setDoc(userRef);
          setDoc(doc(db, "Users", cred.user.uid), {
            Email: email,
            FirstName: firstName,
            LastName: lastName,
          });
          navigate("/findevent");
        })
        .catch((error) => {
          console.log(error.message);
        });
      const db = getFirestore();
      const colRef = collection(db, "Users");
    } else {
      alert("Password doesn't match");
    }
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    confirmPassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value);
    console.log(password);
  };

  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setConfirmPassword(event.target.value);
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
          <h2 className="mt-5">Welcome!</h2>
          <TextField
            id="outlined-basic"
            className="text-field-sm mt-4 mb-4"
            label="First Name"
            variant="outlined"
            color="secondary"
            onChange={handleFirstChange}
          />
          &nbsp;&nbsp;
          <TextField
            id="outlined-basic"
            className="text-field-sm mt-4 mb-4"
            label="Last Name"
            variant="outlined"
            color="secondary"
            onChange={handleLastChange}
          />
          <br />
          <TextField
            id="outlined-basic"
            className="text-field m--1 mt-4 mb-4"
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
          <br />
          <FormControl variant="outlined">
            <InputLabel color="secondary" htmlFor="outlined-adornment-password">
              Confirm
            </InputLabel>
            <OutlinedInput
              color="secondary"
              className="text-field"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange2("confirmPassword")}
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
          {/* <p className="mt-2 forgot-password">
            forgot password? <a href="#">Reset</a>
          </p> */}
          <button onClick={handleSubmit} className="btn mt-4 mb-4 ctc">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              {" "}
              <a href="#">Log In</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
