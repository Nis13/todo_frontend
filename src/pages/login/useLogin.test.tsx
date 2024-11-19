import { describe, expect, it } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { wrapper } from "../../testutils";
import useLogin from "./useLogin";
import { loginSuccess } from "../../store/authSlice";
import {
  mockedPost,
  mockedUsedDispatch,
  mockedUsedNavigate,
} from "../../setuptest";
import { userCredentialsDemoData } from "../../demoData/userDemoData";
import { errorResponseDemo } from "../../demoData/todoDemoData";

describe("Given: useLogin Hook", () => {
  describe("When: useLogin is called", () => {
    it("Then: should mutate and trigger onSuccess", async () => {
      const mockAccessToken = "mock-access-token";
      mockedPost.mockResolvedValue({
        data: {
          accessToken: mockAccessToken,
        },
      });
      const { result } = renderHook(useLogin, { wrapper });

      act(() => {
        result.current.handleLogin(userCredentialsDemoData);
      });
      await waitFor(() => {
        expect(mockedPost).toHaveBeenCalledWith(
          "/auth/login",
          userCredentialsDemoData
        );
        expect(mockedUsedDispatch).toHaveBeenCalledWith(
          loginSuccess({ accessToken: mockAccessToken })
        );
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/todos");
      });
    });
  });
  describe("When the mutation fails", () => {
    it("should set an error response", async () => {
      const response = `Error: ${errorResponseDemo}`;
      mockedPost.mockRejectedValue(new Error(errorResponseDemo));

      const { result } = renderHook(useLogin, { wrapper });

      await act(async () => {
        await expect(
          result.current.handleLogin(userCredentialsDemoData)
        ).rejects.toThrow(errorResponseDemo);
      });

      await waitFor(() => {
        expect(result.current.errorResponse).toBe(response);
      });
    });
  });
});
