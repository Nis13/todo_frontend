import { describe, expect, it } from "vitest";
import { mockedPost } from "../../setuptest";
import { renderHook, waitFor } from "@testing-library/react";
import useLoginApi from "./useLoginApi";
import { userCredentialsDemoData } from "../../demoData/userDemoData";

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

      waitFor(() => {
        expect(mockedPost).toHaveBeenCalledWith(
          "/auth/login",
          userCredentialsDemoData
        );
        expect(result).toEqual("sampleAccessToken");
      });
    });
  });
});
