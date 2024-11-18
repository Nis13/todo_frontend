import { LoginView } from "./LoginView";
import { StoryFn } from "@storybook/react";

export default {
  title: "pages/LoginPage",
  component: LoginView,
};

const Template: StoryFn<typeof LoginView> = (args) => <LoginView {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  response: null,
};

export const LoginViewLoading = Template.bind({});
LoginViewLoading.args = {
  ...Default.args,
  isLoading: true,
};

export const LoginErrorResponse = Template.bind({});
LoginErrorResponse.args = {
  ...Default.args,
  response: "Error: Invalid credentials",
};
