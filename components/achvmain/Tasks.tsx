"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


const Tasks = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
      <div>Tasks</div>
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
  );
};

export default Tasks;
