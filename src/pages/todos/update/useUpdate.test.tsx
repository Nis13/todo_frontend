import { describe, expect, it } from "vitest";
import { mockedPut } from "../../../setuptest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { wrapper } from "../../../testutils";
import {
  errorResponseDemo,
  todoUpdateDemoData,
} from "../../../demoData/todoDemoData";
import { useUpdate } from "./useUpdate";

describe("Given: useUpdate hook", () => {
  describe("When: useUpdate is called", () => {
    it("Then: should mutate data and trigger onSuccess", async () => {
      const { result } = renderHook(() => useUpdate(), { wrapper });

      await act(async () => {
        result.current.handleSubmit({ id: "1", ...todoUpdateDemoData });
      });

      expect(mockedPut).toHaveBeenCalledWith("todo/1", todoUpdateDemoData);
      expect(result.current.openModal).toBeFalsy();
    });
  });

  describe("When the mutation fails", () => {
    it("should set an error response", async () => {
      const response = `Error: ${errorResponseDemo}`;
      mockedPut.mockRejectedValue(new Error(errorResponseDemo));

      const { result } = renderHook(() => useUpdate(), { wrapper });

      await act(async () => {
        await expect(
          result.current.handleSubmit({ id: "1", ...todoUpdateDemoData })
        ).rejects.toThrow(errorResponseDemo);
      });

      await waitFor(() => {
        expect(result.current.errorResponse).toBe(response);
      });
    });
  });
});
