"use strict";
/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   * 
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   * 
   * */

  getChains() {
    // TODO: implement this!
    const chains = {};

    for (let i = 0; i < this.words.length - 1; i++) {
      //console.log(this.words[i]);
      if (!chains[this.words[i]]) {
        chains[this.words[i]] = [];
      }
      chains[this.words[i]].push(this.words[i + 1]);
    }

    const lastIndex = this.words.length - 1;
    if (!chains[this.words[lastIndex]]) {
      chains[this.words[lastIndex]] = [];
    }
    chains[this.words[lastIndex]].push(null);

    //append null to entry for last word
    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
    const output = [];
    let currentKey = this.words[0];

    while(currentKey !== null){
      output.push(currentKey);
      let randomIndex = this.getRandomInt(this.chains[currentKey].length)
      currentKey = this.chains[currentKey][randomIndex];
    }

    return output.join(" ");
  }

  getRandomInt(length) {
    return Math.floor(Math.random() * length);
  }
}

module.exports = {
  MarkovMachine: MarkovMachine,
}