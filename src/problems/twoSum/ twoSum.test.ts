import { twoSum } from './twoSum';

describe('twoSum', () => {
  it('returns correct indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('returns empty array if no solution', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});