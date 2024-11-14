import { describe, expect, it } from "vitest";
import { mockedGet } from "../../setuptest";
import { todoDemoData } from "../../demoData/todoDemoData";
import { renderHook, waitFor } from "@testing-library/react";
import useFetchTodoApi from "./useFetchTodoApi";

describe("Given: Todo Api", () => {
  describe("When: Todo Api is called", () => {
    it("Then: should return the todos", () => {
      mockedGet.mockResolvedValueOnce({
        data: todoDemoData,
      });

      const { result } = renderHook(useFetchTodoApi);

      waitFor(() => {
        expect(mockedGet).toHaveBeenCalledWith("/user/todo");
        expect(result.current).toEqual(todoDemoData);
      });
    });
  });
});
