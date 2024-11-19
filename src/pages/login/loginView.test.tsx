import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LoginView } from "./LoginView";

const mockHandleLogin = vi.fn();
describe("Given: Login Page", () => {
  describe("When: Login page loads", () => {
    it("Then: should render the login form with email and password fields", () => {
      render(
        <LoginView
          isLoading={false}
          errorResponse=""
          handleLogin={mockHandleLogin}
        />
      );

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });
  });

  describe("When: Form is submitted and Loading is True", () => {
    it("Then: should display the Loading icon and disable the login button", () => {
      render(
        <LoginView
          isLoading={true}
          errorResponse=""
          handleLogin={mockHandleLogin}
        />
      );

      const loginButton = screen.getByRole("button", { name: /login/i });
      expect(loginButton).toBeDisabled();
    });
  });
});
