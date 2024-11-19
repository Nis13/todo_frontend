import { MockedFunction, vi } from "vitest";
import api from "./api/api";
import "@testing-library/jest-dom";

vi.mock("./api/api");

export const mockedGet = api.get as MockedFunction<typeof api.get>;
export const mockedPost = api.post as MockedFunction<typeof api.post>;
export const mockedPut = api.put as MockedFunction<typeof api.put>;
export const mockedDelete = api.delete as MockedFunction<typeof api.delete>;

export const mockedUsedNavigate = vi.fn();

export const mockedUsedDispatch = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

vi.mock("react-redux", () => ({
  useDispatch: () => mockedUsedDispatch,
}));
