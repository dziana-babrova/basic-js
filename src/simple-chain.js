const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = " ") {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error ("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = "";
    for (let i = 0; i < this.chain.length; i++) {
      string += `~( ${this.chain[i]} )~`;
    }
    this.chain = [];
    return string.slice(1, (string.length - 1));
  }
};

module.exports = {
  chainMaker
};
