import { TodoStatusEnum } from "../pages/todos/update/update.types";

export const todoDemoData = [
  {
    id: "1",
    title: "Clean Room",
    status: "pending",
    date: Date.now().toString(),
  },
  {
    id: "2",
    title: "Read Book",
    status: "completed",
    date: Date.now().toString(),
  },
];

export const todoAddDemoData = { title: "Add Task" };

export const todoUpdateDemoData = {
  ...todoAddDemoData,
  status: TodoStatusEnum.COMPLETED,
};

export const errorResponseDemo = "Error Occured";

export const deletionSuccessMessage = "todo of ID: 1 successfully deleted";
