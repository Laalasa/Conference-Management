import React from "react";
import Navbar from "../Navbar";
import Card from "./Card";
import Filters from "./Filters";
import data from "./Data";
import { useState } from "react";
import Popup from "./Popup";

export default function FindEvent() {
  const [arr, setarray] = useState(data);
  console.log(data);
  return (
    <div className="container">
      <div className="mb-5">
        <Navbar active="find" />
      </div>
      <div className=" body">
        <Filters />
        <div className="row">
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
          {arr.map((item) => {
            return (
              <div className="col">
                <Popup
                  Name={item.Name}
                  Email={item.Email}
                  Date={item.Date}
                  Start={item.StartTime}
                  End={item.EndTime}
                  Image={item.Image}
                  Desc={item.Description}
                  DocId={item.id}
                ></Popup>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
