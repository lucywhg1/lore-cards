import React from "react";
import { Category } from "../types";
import Sidebar from "./Sidebar/Sidebar";

const categories: Category[] = [
  { name: "All", icon: "bars", iconColor: "success" },
  { name: "Favorites", icon: "heart", iconColor: "danger" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="columns">
      <section className="column is-2">
        <Sidebar categories={categories} />
      </section>
      <section className="section column is-3"></section>
      <section className="section column is-7"></section>
    </div>
  );
};

export default Dashboard;
