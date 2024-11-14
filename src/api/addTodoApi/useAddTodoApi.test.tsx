import { describe, expect, it } from "vitest";
import { mockedPost } from "../../setuptest";
import { renderHook, waitFor } from "@testing-library/react";
import useAddTodoApi from "./useAddTodoApi";

describe("Given: Add Todo Api", () => {
  describe("When: useAddTodoApi is called", () => {
    it("Then: should", () => {
      mockedPost.mockResolvedValue(201);

      const { result } = renderHook(useAddTodoApi);

      waitFor(() => {
        expect(mockedPost).toHaveBeenCalledWith("/todo");
        expect(result).toEqual(201);
      });
    });
  });
});
