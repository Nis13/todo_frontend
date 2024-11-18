import { beforeEach, describe, expect, it, vi } from "vitest";
import { mockedGet } from "../../../setuptest";
import {
  errorResponseDemo,
  todoDemoData,
} from "../../../demoData/todoDemoData";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useTodos } from "./useTodos";
import { queryClient, wrapper } from "../../../testutils";

describe("Given: useTodos hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });
  describe("When: useTodos hook is called ", () => {
    it("Then: should return the todo list", async () => {
      mockedGet.mockResolvedValueOnce({
        data: todoDemoData,
      });

      const { result } = renderHook(() => useTodos(), { wrapper });

      expect(mockedGet).toHaveBeenCalled();
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
        expect(result.current.data).toEqual(todoDemoData);
      });
    });

    it("Then: Should filter todos based on activeTab", async () => {
      mockedGet.mockResolvedValueOnce({
        data: todoDemoData,
      });

      const { result } = renderHook(() => useTodos(), { wrapper });

      await waitFor(() => {
        expect(result.current.data).toBe(todoDemoData);
      });
      const mockEvent = {} as React.SyntheticEvent;

      act(() => result.current.handleChange(mockEvent, "completed"));

      await waitFor(() =>
        expect(result.current.filteredTodos).toEqual([todoDemoData[1]])
      );
    });
  });
  describe("When: Api call fails", () => {
    it("Then: should return error state if API call fails", async () => {
      mockedGet.mockRejectedValueOnce(new Error(errorResponseDemo));
      const { result } = renderHook(() => useTodos(), { wrapper });

      await waitFor(() => {
        expect(result.current.isLoading).toBeFalsy();
        expect(result.current.isError).toBe(true);
        expect(result.current.error).toEqual(new Error(errorResponseDemo));
      });
    });
  });
});
