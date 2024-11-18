import { describe, expect, it } from "vitest";
import { mockedPost } from "../../../setuptest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useAdd } from "./useAdd";
import { wrapper } from "../../../testutils";
import {
  errorResponseDemo,
  todoAddDemoData,
} from "../../../demoData/todoDemoData";

describe("Given: useAdd hook", () => {
  describe("When: useAdd is called", () => {
    it("Then: should mutate data and trigger onSuccess", async () => {
      mockedPost.mockResolvedValue({ status: 201 });

      const { result } = renderHook(() => useAdd(), { wrapper });

      await act(async () => {
        await result.current.handleAddTask(todoAddDemoData);
      });

      await waitFor(() => result.current.isLoading === false);

      expect(mockedPost).toHaveBeenCalled();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toBe(201);
      expect(result.current.openModal).toBe(false);
    });
  });

  describe("When the mutation fails", () => {
    it("should set an error response", async () => {
      const response = `Error: ${errorResponseDemo}`;
      mockedPost.mockRejectedValue(new Error(errorResponseDemo));

      const { result } = renderHook(() => useAdd(), { wrapper });

      await act(async () => {
        await expect(
          result.current.handleAddTask(todoAddDemoData)
        ).rejects.toThrow(errorResponseDemo);
      });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(true);
        expect(result.current.response).toBe(response);
      });
    });
  });
});
