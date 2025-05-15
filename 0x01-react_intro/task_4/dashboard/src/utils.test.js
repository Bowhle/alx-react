import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

describe('utils.js tests', () => {
  it('should return the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  it('should return the correct footer copy when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('ALX');
  });

  it('should return the correct footer copy when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
  });

  it('should return the correct notification string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
