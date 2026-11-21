const { Cart } = require('../src/cart');

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('상품을 추가하면 총액에 반영된다', () => {
    cart.addItem('apple', 1000, 2);
    cart.addItem('banana', 500);
    expect(cart.getTotal()).toBe(2500);
  });

  test('같은 상품을 추가하면 수량이 합쳐진다', () => {
    cart.addItem('apple', 1000);
    cart.addItem('apple', 1000, 2);
    expect(cart.items).toHaveLength(1);
    expect(cart.items[0].quantity).toBe(3);
  });

  test('상품을 삭제할 수 있다', () => {
    cart.addItem('apple', 1000);
    cart.removeItem('apple');
    expect(cart.getTotal()).toBe(0);
  });

  test('할인율이 적용된다', () => {
    cart.addItem('apple', 1000, 2);
    cart.applyDiscount(10);
    expect(cart.getTotal()).toBe(1800);
  });

  test.each([
    ['이름 없음', '', 1000, 1],
    ['음수 가격', 'apple', -1, 1],
    ['소수 수량', 'apple', 1000, 1.5],
    ['0 수량', 'apple', 1000, 0],
  ])('잘못된 상품 추가 시 에러: %s', (_label, name, price, qty) => {
    expect(() => cart.addItem(name, price, qty)).toThrow('잘못된 상품 정보입니다');
  });

  test.each([-1, 101])('잘못된 할인율(%i)이면 에러', (percent) => {
    expect(() => cart.applyDiscount(percent)).toThrow();
  });
});