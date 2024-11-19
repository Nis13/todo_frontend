import { describe, expect, it } from "vitest";
import { mockedPost } from "../../setuptest";
import { renderHook } from "@testing-library/react";
import { errorResponseDemo } from "../../demoData/todoDemoData";
import useSignupApi from "./useSignupApi";
import { userSignupDemoData } from "../../demoData/userDemoData";

describe("Given: signup Api", () => {
  describe("When: signupApi is called", () => {
    it("Then: should call the post ", () => {
      renderHook(() => useSignupApi(userSignupDemoData));

      expect(mockedPost).toHaveBeenCalledWith(
        "/auth/signup",
        userSignupDemoData
      );
    });
  });

  describe("When: useAddTodoApi is called and error occurs", () => {
    it("Then: should throw error", async () => {
      mockedPost.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(useSignupApi(userSignupDemoData)).rejects.toThrow(
        errorResponseDemo
      );
      expect(mockedPost).toHaveBeenCalledWith(
        "/auth/signup",
        userSignupDemoData
      );
    });
  });
});
