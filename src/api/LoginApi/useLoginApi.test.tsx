import { describe, expect, it } from "vitest";
import { mockedPost } from "../../setuptest";
import { renderHook, waitFor } from "@testing-library/react";
import useLoginApi from "./useLoginApi";
import { userCredentialsDemoData } from "../../demoData/userDemoData";
import { errorResponseDemo } from "../../demoData/todoDemoData";

describe("Given: Login Api", () => {
  describe("When: Login Api is called", () => {
    it("Then: should take user credentials and return accessToken", () => {
      const mockResponse = {
        data: {
          accessToken: "sampleAccessToken",
        },
      };
      mockedPost.mockResolvedValue(mockResponse);

      const { result } = renderHook(() => useLoginApi(userCredentialsDemoData));

      expect(mockedPost).toHaveBeenCalledWith(
        "/auth/login",
        userCredentialsDemoData
      );
      waitFor(() => {
        expect(result).toEqual("sampleAccessToken");
      });
    });
  });
  describe("When: useLoginApi is called and error occurs", () => {
    it("Then: should throw error", async () => {
      mockedPost.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(useLoginApi(userCredentialsDemoData)).rejects.toThrow(
        errorResponseDemo
      );

      expect(mockedPost).toHaveBeenCalledWith(
        "/auth/login",
        userCredentialsDemoData
      );
    });
  });
});
