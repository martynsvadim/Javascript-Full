'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }
  ID = Math.random();
  dateCreated = new Date();
  isConfirmed = false;
  dateConfirmed = new Date();

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const user1 = new Order(999, 'Kyiv', 'Sell');
