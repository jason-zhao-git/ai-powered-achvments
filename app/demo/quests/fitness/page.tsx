
import React from "react";
import DemoFlow from "@/components/demoflow/DemoFlow.jsx";

const page = () => {
  return (
    <div className="w-screen h-screen  bg-gray-800">
      <DemoFlow flowKey="fitness"/>
    </div>
  );
};

export default page;
