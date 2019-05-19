import updateCartCount from './updateCartCount';

describe('updateCartCount works as expected', () => {

  it("returns emply array when suplied with invalid products", () => {
    expect(updateCartCount(undefined, 2)).toEqual([]);
    expect(updateCartCount("random", 2)).toEqual([]);
    expect(updateCartCount({}, 2)).toEqual([]);
    expect(updateCartCount(() => { }, 2)).toEqual([]);
  });
})