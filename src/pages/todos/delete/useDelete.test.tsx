import { describe, expect, it } from "vitest";
import { mockedDelete } from "../../../setuptest";
import {
  deletionSuccessMessage,
  errorResponseDemo,
} from "../../../demoData/todoDemoData";
import { act, renderHook, waitFor } from "@testing-library/react";
import useDelete from "./useDelete";
import { wrapper } from "../../../testutils";

describe("Given: useDelete hook", () => {
  describe("When: useDelete hook is called", () => {
    it("Then: should mutate and trigger onSuccess", async () => {
      mockedDelete.mockResolvedValue(deletionSuccessMessage);

      const { result } = renderHook(useDelete, { wrapper });

      await act(async () => {
        await result.current.handleDelete("1");
      });

      expect(mockedDelete).toHaveBeenCalled();
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isError).toBe(false);
    });
  });

  describe("When: the mutation fails", () => {
    it("Then: should set an error response", async () => {
      const response = `Error: ${errorResponseDemo}`;
      mockedDelete.mockRejectedValue(new Error(errorResponseDemo));

      const { result } = renderHook(() => useDelete(), { wrapper });

      await act(async () => {
        await expect(result.current.handleDelete("1")).rejects.toThrow(
          errorResponseDemo
        );
      });

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.isError).toBe(true);
        expect(result.current.response).toBe(response);
      });
    });
  });
});
