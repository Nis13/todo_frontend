import { describe, expect, it } from "vitest";
import { mockedDelete } from "../../setuptest";
import { renderHook, waitFor } from "@testing-library/react";
import useDeleteTodoApi from "./useDeleteTodoApi";
import { errorResponseDemo } from "../../demoData/todoDemoData";

describe("Given: Delete Todo Api", () => {
  describe("When: Delete Api is called with correct Id", () => {
    it("Then: should return the deletion successfull message", () => {
      const successResponse = "todo of ID: 1 successfully deleted";
      mockedDelete.mockResolvedValue(successResponse);

      const { result } = renderHook(() => useDeleteTodoApi("1"));

      expect(mockedDelete).toHaveBeenCalledWith("/todo/1");
      waitFor(() => {
        expect(result.current).toBe(successResponse);
      });
    });
  });

  describe("When: useDeleteTodoApi is called and error occurs", () => {
    it("Then: should throw error", async () => {
      mockedDelete.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(useDeleteTodoApi("1")).rejects.toThrow(errorResponseDemo);

      expect(mockedDelete).toHaveBeenCalledWith("/todo/1");
    });
  });
});
