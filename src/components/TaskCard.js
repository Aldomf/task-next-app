import { useRouter } from "next/navigation";
import { useTask } from "@/context/TasksContext";
import { toast } from "react-hot-toast";

function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTask();

  return (
    <div
      className="bg-gray-900 text-white w-full px-5 py-5"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-xl font-bold">{task.title}</h1>
        <button
          className="bg-red-500 text-white rounded px-4 py-2 mt-2 md:mt-0"
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm(
              "Are you sure you want to delete this task?"
            );
            if (accept) {
              deleteTask(task.id);
              toast.success("Task deleted successfully");
            }
          }}
        >
          Delete
        </button>
      </div>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
