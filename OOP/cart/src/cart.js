import _ from 'lodash';

export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return _.sumBy(this.getItems(), (goods) => goods.count);
  }

  getCost() {
    return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
  }
}
