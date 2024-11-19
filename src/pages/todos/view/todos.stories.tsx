import { StoryFn } from "@storybook/react";
import { TodosView } from "./TodosView";
import { todoDemoData } from "../../../demoData/todoDemoData";

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
  error: new Error("Error has occured"),
};
export const TodosNoTask = Template.bind({});
TodosNoTask.args = {
  ...Default.args,
  data: [],
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
  data: todoDemoData,
  filteredTodos: todoDemoData,
  activeTab: "all",
};

export const TodosPending = Template.bind({});
TodosPending.args = {
  ...TodosAllTodos.args,
  activeTab: "pending",
  filteredTodos: [todoDemoData[0]],
};

export const TodosCompleted = Template.bind({});
TodosCompleted.args = {
  ...TodosAllTodos.args,
  activeTab: "completed",
  filteredTodos: [todoDemoData[1]],
};
