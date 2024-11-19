import { describe, expect, it } from "vitest";
import { mockedPut } from "../../setuptest";
import { renderHook, waitFor } from "@testing-library/react";
import useUpdateTodoApi from "./useUpdateTodoApi";
import {
  errorResponseDemo,
  todoUpdateDemoData,
} from "../../demoData/todoDemoData";

describe("Given: Update Todo Api", () => {
  describe("When: useUpdateTodoApi is called", () => {
    it("Then: should return the correct status", () => {
      mockedPut.mockResolvedValue(200);

      const { result } = renderHook(() =>
        useUpdateTodoApi({ id: "1", ...todoUpdateDemoData })
      );

      expect(mockedPut).toHaveBeenCalledWith("todo/1", todoUpdateDemoData);
      waitFor(() => {
        expect(result.current).toEqual(200);
      });
    });
  });

  describe("When: useUpdateTodoApi is called and error occurs", () => {
    it("Then: should throw error", async () => {
      mockedPut.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(
        useUpdateTodoApi({ id: "1", ...todoUpdateDemoData })
      ).rejects.toThrow("Error Occured");

      expect(mockedPut).toHaveBeenCalledWith(`todo/1`, todoUpdateDemoData);
    });
  });
});
