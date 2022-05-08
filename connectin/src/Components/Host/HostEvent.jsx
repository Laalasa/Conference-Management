import React from "react";
import Navbar from "../Navbar";
import "../../Style/Registration.css";
import { db } from "../Data/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuthContext } from "../Data/auth";
import { useState } from "react";
import { getDownloadURL } from "firebase/storage";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../Data/firebase";

export default function HostEvent() {
  const { user } = useAuthContext();
  console.log(user.uid);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [desc, setDesc] = useState("");
  const [fee, setFee] = useState("");
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxk0JzA3-sHBiHOFJuurRkW8axDgoq8hYooA&usqp=CAU"
  );
  const [img, setImg] = useState("");

  const handleChange = (e) => {
    setImg(e.target.value);
    setImg(e.target.files[0]);
    console.log(e.target.value, " ", `images/${e.target.value}`);
    const metadata = {
      contentType: "image/jpeg",
    };
    let storageRef = ref(storage, `images/${e.target.value}`);

    // uploadBytes(storageRef, img, metadata).then((snapshot) => {
    //   console.log(snapshot);

    const uploadTask = uploadBytesResumable(storageRef, img, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        let x = document.getElementById("display");
        console.log(snapshot);
        console.log(progress);
        if (snapshot.bytesTransferred === 0) {
          x.innerHTML = `<p>Upload Failed, please upload again</p>`;
        } else {
          x.innerHTML = `<p>Upload is ${Math.round(progress)}% done</p>`;

          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        }
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Date: date,
      StartTime: start,
      EndTime: end,
      Description: desc,
      Fee: fee,
      Image: image,
      UserID: user.uid,
    };

    const eventColRef = collection(db, "Events");
    // const userColRef = collection(db, "Users", user.uid);

    try {
      addDoc(eventColRef, data).then(
        (value) => {
          // updateDoc(userColRef, { array: arrayUnion(value.id) });
        },
        setName(""),
        setEmail(""),
        setDate(""),
        setStart(""),
        setEnd(""),
        setDesc(""),
        setFee(""),
        setImage(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxk0JzA3-sHBiHOFJuurRkW8axDgoq8hYooA&usqp=CAU"
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      hi
      <br />
      <div className="form-out mb-5">
        <div className="p-5 m-5 form">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Conference Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Conferece Date</label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Start Time</label>
              <input
                onChange={(e) => setStart(e.target.value)}
                type="time"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">End Time</label>
              <input
                onChange={(e) => setEnd(e.target.value)}
                type="time"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Conference Details
              </label>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Conference Fee</label>
              <input
                onChange={(e) => setFee(e.target.value)}
                type="text"
                class="form-control"
              />
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="input">Upload Image</label>
              </div>
              <div class="custom-file">
                <input onChange={handleChange} type="file"></input>
              </div>
              <div id="display"></div>
            </div>
            <button onClick={handleSubmit} className="ctc btn mt-4 mb-4 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
