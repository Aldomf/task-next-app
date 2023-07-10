"use client";

import { useEffect } from "react";
import { useTask } from "@/context/TasksContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function TaskPage({ params }) {
  const { tasks, createTask, updateTask } = useTask();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data.title, data.description);
      toast.success("Task updated successfully")
    } else {
      createTask(data.title, data.description);
      toast.success("Task created successfully")
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit} className="p-4">
        <input
          placeholder="Write a title"
          {...register("title", { required: true })}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        {errors.title && <span className="text-red-500">This field is required</span>}
        <textarea
          placeholder="Write a description"
          {...register("description", { required: true })}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        {errors.description && <span className="text-red-500">This field is required</span>}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}

export default TaskPage;
