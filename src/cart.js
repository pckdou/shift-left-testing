class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity = 1) {
    if (!name || price < 0 || !Number.isInteger(quantity) || quantity <= 0) {
      throw new Error('잘못된 상품 정보입니다');
    }
    const existing = this.items.find((item) => item.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ name, price, quantity });
    }
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  applyDiscount(percent) {
    if (percent < 0 || percent > 100) {
      throw new Error('할인율은 0~100 사이여야 합니다');
    }
    this.discountPercent = percent;
  }

  getTotal() {
    const subtotal = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return Math.round(subtotal * (1 - this.discountPercent / 100));
  }
}

module.exports = { Cart };