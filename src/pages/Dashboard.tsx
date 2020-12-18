import React from "react";
import { Campaign } from "../types";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard: React.FC = () => {
  const campaign: Campaign = { name: "meakanu" };

  return (
    <div className="columns">
      <section className="column is-2">
        <Sidebar campaign={campaign} />
      </section>
      <section className="section column is-3"></section>
      <section className="section column is-7"></section>
    </div>
  );
};

export default Dashboard;
