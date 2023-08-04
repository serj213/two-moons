import { describe, expect, test } from '@jest/globals';
import { increment } from './increment';

describe('sum', () => {
  test('increment', () => {
    expect(increment(2)).toBe(4);
  });
});
