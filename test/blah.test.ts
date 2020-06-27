import { sum } from '../src';

describe('blah', () => {
  it('works prod', () => {
    process.env.NODE_ENV = 'production';
    const consoleSpy = jest.spyOn(console, 'log');
    expect(sum(1, 1)).toEqual(2);
    expect(consoleSpy).toHaveBeenCalledTimes(0);
  });
  it('works dev', () => {
    process.env.NODE_ENV = 'development';
    const consoleSpy = jest.spyOn(console, 'log');
    expect(sum(1, 1)).toEqual(2);
    expect(consoleSpy).toHaveBeenCalledWith('boop');
  });
});
