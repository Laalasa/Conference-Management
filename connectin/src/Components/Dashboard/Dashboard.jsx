import React from "react";
import Navbar from "../Navbar";
import Section from "./Section";
import "../../Style/Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Navbar active="dash" />
      <div className="mt-6">
        <Section />
      </div>
    </div>
  );
}
