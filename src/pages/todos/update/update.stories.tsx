import { StoryFn } from '@storybook/react';
import UpdateView from './UpdateView';
import { todoDemoData } from '../../../demoData/todoDemoData';

export default {
  title: 'pages/ToDoPage/updateTodo',
  component: UpdateView
};

const Template: StoryFn<typeof UpdateView> = args => <UpdateView {...args} />;

export const Default = Template.bind({});
Default.args = {
  openModal: false,
  isLoading: false,
  data: todoDemoData[0],
  response: null
};

export const UpdateLoading = Template.bind({});
UpdateLoading.args = {
  ...Default.args,
  openModal: true,
  isLoading: true
};

export const UpdateError = Template.bind({});
UpdateError.args = {
  ...Default.args,
  openModal: true,
  response: 'Error has occured'
};

export const UpdateTask = Template.bind({});
UpdateTask.args = {
  ...Default.args,
  openModal: true
};
