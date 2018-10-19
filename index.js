/* Settings

1 - You need to install Node.Js to run this program:
https://github.com/creationix/nvm

This program runs on top of Node 8.12.0

2 - Install Dependencies with: $ npm install

3 - Run tests with: $ npm test

4 - How to use it ?

  const result = nGram("Show me the code.");
  console.log(result);

  [ 'Show',
  'Show me',
  'Show me the',
  'Show me the code',
  'me',
  'me the',
  'me the code',
  'the',
  'the code',
  'code' ]

  Run the example with: $ node index.js

*/

const expect = require('expect.js');
const isInTest = typeof global.it === 'function';

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function findWords(words, total, acc = {limit: 0, idx: 0, word:  '', ngrams: []}) {
  if(acc.idx < total) {
    let word = `${acc.word}${words[acc.idx]}`;
    acc.ngrams.push(word);
    acc.idx += 1;
    acc.word = `${word} `;
    return findWords(words, total, acc);
  }
  if(acc.limit < total) {
     acc.limit += 1;
     acc.idx = acc.limit;
     acc.word = '';
     return findWords(words, total, acc);
  }
  return acc.ngrams;
}

function nGram(str) {
  if(isEmpty(str)) {
     return [];
  }

  const words = str
  .replace(/[^a-z0-9\s]/gi,'')
  .split(' ');

  return findWords(words, words.length);
};

if(isInTest) {

  describe('nGram', () => {

    it('empty argument should return an empty list', () => {
        expect([]).to.eql(nGram());
    });

    it('phrase should return a list of ngrams', () => {
      const expected = [
        "Show",
        "Show me",
        "Show me the",
        "Show me the code",
        "me",
        "me the",
        "me the code",
        "the",
        "the code",
        "code"
      ];
      expect(expected).to.eql(nGram("Show me the code."));
    });

    it('one word should return a list of one element', () => {
      const expected = ["Show"];
      expect(expected).to.eql(nGram("Show"));
    });

  });

} else {
  const result = nGram("Show me the code.");
  console.log(result);
}
