import { useLocalStorage, useSessionStorage } from '../src';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useLocalStorage testing', () => {
  const TEST_KEY = 'key';
  const TEST_VALUE = 'test';
  const UPDATE_VALUE = 'update';

  it('should set localStorage with default value.', () => {
    renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    expect(localStorage.getItem(TEST_KEY)).toEqual(TEST_VALUE);
  });

  it('should set the default value from localStorage if it exists', () => {
    localStorage.setItem(TEST_KEY, TEST_VALUE);
    renderHook(() => useLocalStorage(TEST_KEY, 'hello'));
    expect(localStorage.getItem(TEST_KEY)).toEqual(TEST_VALUE);
  });

  it('should update local storage.', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));

    act(() => {
      result.current[1](UPDATE_VALUE);
    });
    expect(localStorage.getItem(TEST_KEY)).toEqual(UPDATE_VALUE);
  });

  it('should remove from local storage.', () => {
    const { result } = renderHook(() => useLocalStorage(TEST_KEY, TEST_VALUE));
    act(() => {
      result.current[2]();
    });
    expect(localStorage.getItem(TEST_KEY)).toEqual(null);
  });
});

describe('useSessionStorage testing', () => {
  const TEST_KEY = 'key';
  const TEST_VALUE = 'test';
  const UPDATE_VALUE = 'update';

  it('should set localStorage with default value.', () => {
    renderHook(() => useSessionStorage(TEST_KEY, TEST_VALUE));
    expect(sessionStorage.getItem(TEST_KEY)).toEqual(TEST_VALUE);
  });

  it('should set the default value from localStorage if it exists', () => {
    sessionStorage.setItem(TEST_KEY, TEST_VALUE);
    renderHook(() => useSessionStorage(TEST_KEY, 'hello'));
    expect(sessionStorage.getItem(TEST_KEY)).toEqual(TEST_VALUE);
  });

  it('should update local storage.', () => {
    const { result } = renderHook(() =>
      useSessionStorage(TEST_KEY, TEST_VALUE)
    );

    act(() => {
      result.current[1](UPDATE_VALUE);
    });
    expect(sessionStorage.getItem(TEST_KEY)).toEqual(UPDATE_VALUE);
  });

  it('should remove from local storage.', () => {
    const { result } = renderHook(() =>
      useSessionStorage(TEST_KEY, TEST_VALUE)
    );
    act(() => {
      result.current[2]();
    });
    expect(sessionStorage.getItem(TEST_KEY)).toEqual(null);
  });
});
