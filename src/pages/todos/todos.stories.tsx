import { StoryFn } from "@storybook/react";
import { TodosView } from "./TodosView";
import { TodoStatusEnum } from "./update/update.types";

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

export const TodosSuccess = Template.bind({});
TodosSuccess.args = {
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
  ],
};
