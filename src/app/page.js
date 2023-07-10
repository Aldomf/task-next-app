"use client";

import { useTask } from "@/context/TasksContext";
import TaskCard from "@/components/TaskCard";

function HomePage() {
  const { tasks } = useTask();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
export default HomePage;
