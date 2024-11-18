import { describe, expect, it } from "vitest";
import { mockedPost } from "../../setuptest";
import { renderHook, waitFor } from "@testing-library/react";
import useAddTodoApi from "./useAddTodoApi";
import {
  errorResponseDemo,
  todoAddDemoData,
} from "../../demoData/todoDemoData";

describe("Given: Add Todo Api", () => {
  describe("When: useAddTodoApi is called", () => {
    it("Then: should return the correct status", () => {
      mockedPost.mockResolvedValue(201);

      const { result } = renderHook(() => useAddTodoApi(todoAddDemoData));

      expect(mockedPost).toHaveBeenCalledWith("todo", todoAddDemoData);
      waitFor(() => {
        expect(result).toEqual(201);
      });
    });
  });

  describe("When: useAddTodoApi is called and error occurs", () => {
    it("Then: should throw error", async () => {
      mockedPost.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(useAddTodoApi(todoAddDemoData)).rejects.toThrow(
        errorResponseDemo
      );
      expect(mockedPost).toHaveBeenCalledWith("todo", todoAddDemoData);
    });
  });
});
