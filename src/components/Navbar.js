"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTask } from "@/context/TasksContext";

export function NavBar() {
  const router = useRouter();
  const { tasks } = useTask();
  console.log(tasks);
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-blue-500 text-white">
      <div className="flex items-center justify-between bottom-4 border-red-900">
        <Link href="/">
          <h1 className="text-4xl font-bold cursor-pointer">Task App</h1>
        </Link>
        <p className=" text-blue-900 font-bold ml-10 text-xl">
          Tasks: <span className="text-black bg-slate-50 w-50 h-50 px-1 py-1 rounded-full ">{tasks.length}</span>
        </p>
      </div>
      <div>
        <button
          onClick={() => router.push("/new")}
          className="px-4 py-2 text-white bg-blue-800 hover:bg-blue-900 rounded-md focus:outline-none"
        >
          Add Task
        </button>
      </div>
    </header>
  );
}
