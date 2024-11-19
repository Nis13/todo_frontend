import { describe, expect, it } from 'vitest';
import { mockedGet } from '../../setuptest';
import { errorResponseDemo, todoDemoData } from '../../demoData/todoDemoData';
import { renderHook, waitFor } from '@testing-library/react';
import useFetchTodoApi from './useFetchTodoApi';

describe('Given: Todo Api', () => {
  describe('When: Todo Api is called', () => {
    it('Then: should return the todos', () => {
      mockedGet.mockResolvedValueOnce({
        data: todoDemoData
      });

      const { result } = renderHook(useFetchTodoApi);

      expect(mockedGet).toHaveBeenCalledWith('/user/todo');
      waitFor(() => {
        expect(result.current).toEqual(todoDemoData);
      });
    });
  });

  describe('When: useFetchTodoApi is called and error occurs', () => {
    it('Then: should throw error', async () => {
      mockedGet.mockRejectedValueOnce(new Error(errorResponseDemo));

      await expect(useFetchTodoApi()).rejects.toThrow(errorResponseDemo);

      expect(mockedGet).toHaveBeenCalledWith('/user/todo');
    });
  });
});
