import React, { useState } from "react";
import { Campaign } from "../types";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const campaign: Campaign = { name: "meakanu", id: 0 };

  return (
    <div className="columns">
      <section key="sidebar-col" className="column is-2">
        <Sidebar activeCategory={categoryId} setCategory={setCategoryId} />
      </section>
      <section key="search-col" className="section column is-3"></section>
      <section key="card-col" className="section column is-7"></section>
    </div>
  );
};

export default Dashboard;
