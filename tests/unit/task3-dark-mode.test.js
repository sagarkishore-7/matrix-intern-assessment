import { renderHook, act } from '@testing-library/react-hooks';
import { useTheme, toggleTheme } from '../../src/tasks/task3-dark-mode/ThemeContext';

test('theme toggles between light and dark', () => {
  const { result } = renderHook(() => useTheme());
  expect(result.current.theme).toBe('light');
  act(() => toggleTheme());
  expect(result.current.theme).toBe('dark');
});