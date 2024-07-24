"use client";
import React from "react";
import DemoFlow from "@/components/demoflow/DemoFlow";

const page = () => {
  return (
    <div className="w-screen h-screen  bg-gray-800">
      <DemoFlow flowKey='tutorial'/>
    </div>
  );
};

export default page;
