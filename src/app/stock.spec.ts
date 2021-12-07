import { Stock } from './models/stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock()).toBeTruthy();
  });
});
