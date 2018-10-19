# N-Grams Node.JS
This is a N-grams program written in Node.JS

1 - You need to install Node.Js to run this program:
https://github.com/creationix/nvm

This program runs on top of Node 8.12.0

2 - Install Dependencies with: `$ npm install`

3 - Run tests with: `$ npm test`

4 - How to use it ?

  ```javascript
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
  'code' ]```

  Run the example with: `$ node index.js`
