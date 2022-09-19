import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import conf from "../../Assets/confe.png";
import Card from "./Card";
import "../../Style/Card.css";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../Data/firebase";
import { useAuthContext } from "../Data/auth.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(item) {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuthContext();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    const userColRef = doc(db, "Users", user.uid);
    // e.preventDefault();
    console.log(item.DocId);
    updateDoc(userColRef, {
      registered: arrayUnion(item.DocId),
    });
    window.open("https://meet.google.com/wpz-giug-gmb");
    let display = document.querySelector(".display-link");
    // display.classList.add("mt-3");
    display.innerHTML = `
    <hr/>
    https://meet.google.com/wpz-giug-gmb
    `;
  };

  return (
    <div>
      <div className="card-out">
        <button class="card" onClick={handleClickOpen}>
          {/* <Card
          Name={item.Name}
          Email={item.Email}
          Date={item.Date}
          Start={item.StartTime}
          End={item.EndTime}
          Image={item.Image}
          Desc={item.Description}
        /> */}

          <div className="card-img-div">
            <img class="card-img-top" src={item.Image} alt="Card image cap" />
          </div>
          <div class="card-body text-start">
            <h6 class="card-title">{item.Name}</h6>
            <p class="card-text">
              {item.Date}, {item.Start}
            </p>
          </div>
        </button>
      </div>
      <Dialog
        className="dialog"
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Conference Details
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}
        <div className="row m-5">
          <div className="col-md-7">
            <img src={conf} alt="" />
            <br />
            <br />
            <br />
            <h2>About the event</h2>
            <p>
              {/* {item.Desc} */}
              You can learn how to use the platform (navigate the agenda,
              network with attendees & speakers and interact with our partners)
              by watching this short 2min video. Mark your calendar and get
              reminder and notifications for the sessions you want to attend.
              Explore the agenda right here.
            </p>
          </div>
          <div className="col-md-4">
            <div className="background p-3">
              <h4>{item.Name}</h4>
              <div className="row">
                <div className="ms-2 col border-end">
                  START TIME
                  <br />
                  {/* {item.Start} */}
                  06 Apr, 6:30 PM
                </div>
                <div className="ms-2 col">
                  END TIME
                  <br />
                  {/* {item.End} */}
                  08 Apr, 3:30 AM
                </div>
                <div className="display-link m-0 p-0">
                  <button
                    onClick={handleClick}
                    className="nav-btn-tri-pop ms-4 mt-4 mb-4"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            <div className="sponsors mt-4">
              <h5>Sponsored By</h5>
              <div className="row ">
                <div className="col m-3 boxx"></div>
                <div className="col m-3 boxx"></div>
                <div className="col m-3 boxx"></div>
                <div className="col m-3 boxx"></div>
                <div className="col m-3 "></div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
