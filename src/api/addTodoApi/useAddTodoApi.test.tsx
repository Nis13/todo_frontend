import { describe, expect, it } from 'vitest';
import { mockedPost } from '../../setuptest';
import { renderHook } from '@testing-library/react';
import useAddTodoApi from './useAddTodoApi';
import { errorResponseDemo, todoAddDemoData } from '../../demoData/todoDemoData';

describe('Given: Add Todo Api', () => {
  describe('When: useAddTodoApi is called', () => {
    it('Then: should return the correct status', () => {
      renderHook(() => useAddTodoApi(todoAddDemoData));

      expect(mockedPost).toHaveBeenCalledWith('todo', todoAddDemoData);
    });
  });

  describe('When: useAddTodoApi is called and error occurs', () => {
    it('Then: should throw error', async () => {
      mockedPost.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(useAddTodoApi(todoAddDemoData)).rejects.toThrow(errorResponseDemo);
      expect(mockedPost).toHaveBeenCalledWith('todo', todoAddDemoData);
    });
  });
});
