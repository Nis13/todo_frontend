import { StoryFn } from "@storybook/react";
import AddTodoView from "./AddTodoView";

export default {
  title: "pages/ToDoPage/addTodo",
  component: AddTodoView,
};

const Template: StoryFn<typeof AddTodoView> = (args) => (
  <AddTodoView {...args} />
);

export const Default = Template.bind({});

Default.args = {
  isLoading: false,
  isError: false,
  openModal: false,
};

export const AddViewLoading = Template.bind({});
AddViewLoading.args = {
  ...Default.args,
  isLoading: true,
  openModal: true,
};

export const AddViewError = Template.bind({});
AddViewError.args = {
  ...Default.args,
  openModal: true,
  isError: true,
  response: "Error Occured",
};
