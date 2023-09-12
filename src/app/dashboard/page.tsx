import React from "react";
import Predict from "@/components/Predict";
import Result from "@/components/Result";

async function Dashboard() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <Predict />
      <Result />
    </div>
  );
}

export default Dashboard;
