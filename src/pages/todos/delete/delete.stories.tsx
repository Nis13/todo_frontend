import { StoryFn } from "@storybook/react";
import DeleteView from "./DeleteView";

export default {
  title: "pages/ToDoPage/deleteTodo",
  component: DeleteView,
};

const Template: StoryFn<typeof DeleteView> = (args) => <DeleteView {...args} />;

export const Default = Template.bind({});
Default.args = {
  rowId: "1",
  openModal: false,
  isLoading: false,
};

export const DeleteTask = Template.bind({});
DeleteTask.args = {
  ...Default.args,
  openModal: true,
};

export const DeleteLoading = Template.bind({});
DeleteLoading.args = {
  ...Default.args,
  openModal: true,
  isLoading: true,
};

export const DeleteError = Template.bind({});
DeleteError.args = {
  ...Default.args,
  openModal: true,
  response: "Error Occured",
};
