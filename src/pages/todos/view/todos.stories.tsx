import { StoryFn } from "@storybook/react";
import { TodosView } from "./TodosView";
import { TodoStatusEnum } from "../update/update.types";

export default {
  title: "pages/TodoPage/viewTodo",
  component: TodosView,
};

const Template: StoryFn<typeof TodosView> = (args) => <TodosView {...args} />;

const Default = Template.bind({});
Default.args = {
  isLoading: false,
  isError: false,
  filteredTodos: undefined,
};

export const TodosLoading = Template.bind({});
TodosLoading.args = {
  ...Default.args,
  isLoading: true,
};

export const TodosError = Template.bind({});
TodosError.args = {
  ...Default.args,
  isError: true,
  error: Error("Error has occured"),
};

export const TodosAllTodos = Template.bind({});
TodosAllTodos.args = {
  ...Default.args,
  columns: [
    { Header: "Title", accessor: "title" },
    { Header: "Status", accessor: "status" },
    {
      Header: "Date Created",
      accessor: "createdAt",
    },
  ],
  filteredTodos: [
    {
      id: "1",
      title: "Clean Room",
      status: TodoStatusEnum.PENDING,
      date: Date.now().toString(),
    },
    {
      id: "2",
      title: "Water Plants",
      status: TodoStatusEnum.COMPLETED,
      date: Date.now().toString(),
    },
  ],
  activeTab: "all",
};

export const TodosPending = Template.bind({});
TodosPending.args = {
  ...TodosAllTodos.args,
  activeTab: "pending",
  filteredTodos: [
    {
      id: "1",
      title: "Clean Room",
      status: TodoStatusEnum.PENDING,
      date: Date.now().toString(),
    },
  ],
};

export const TodosCompleted = Template.bind({});
TodosCompleted.args = {
  ...TodosAllTodos.args,
  activeTab: "completed",
  filteredTodos: [
    {
      id: "2",
      title: "Water Plants",
      status: TodoStatusEnum.COMPLETED,
      date: Date.now().toString(),
    },
  ],
};