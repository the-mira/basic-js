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

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position > this.chain.length || position <= 0 || typeof position !== 'number'){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain = this.chain.filter((_, index) => index !== position - 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this.chain.join("~~");
    this.chain = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
