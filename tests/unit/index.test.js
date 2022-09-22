const axios = require('axios');
/*
Basic Jest Testing

Jest tests must exist in a test block. This can be done using 'it' or 'test' as you see below.

These functions except two parameters: the name of the test and a function that will run the test.

You can wrap multiple tests that do the same thing in a descirbe block, which is structured similarly to the individual test blocks.

*/
describe('example tests', () => {
  test('adds 1 + 2 to be 3', () => {
    // toBe here does a strict '===' equals which we can use for simple primitive values
    expect(1+2).toBe(3);
  });
  it('compare arrays', () => {
    // toEqual here does similar work, but it can be used to compare the contents and strucutre of more complex objects
    expect([1]).toEqual([1]);
  });

  it('truthy and falsy', () => {

  })
});

/*
To understand a bit more of what Jest can do, checkout their documentation here https://jestjs.io/docs/using-matchers
*/

// Testing Asynchronous Code
describe('asynchronous code', () => {
  /*
  We can test async code by returning a promise that includes the test to be run. Jest will wait for the promise to resolve.
  */
  test('promises', () => {
    return axios.get('http://localhost:3000/')
    .then((res) => {
      expect(res.status).toBe(200);
    });
  });

  /*
  We can also use async/await syntax by using the async keyword in front of the function passed to test. Make sure to use the await keyword before every value that depends on an asyncronous process.
  */
  test('async/await', async () => {
    const response = await axios.get('http://localhost:3000/');
    expect(response.status).toBe(200);
  });

  /*
  We can also use callbacks by passing an argument to the test function called 'done'. Using this function will allow for the test to end when the callback has compelted. The following doesn't actually run but provides an example of what your callback should look like.
  */
  test('callbacks', (done) => {
    function callback(error, res) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(res.status).toBe(200);
        done();
      } catch (error) {
        done(error);
      }
    }
    done();
  });

  /*
    Lastly, you can use Jest's .resolves/ .rejects matcher which will wait for your promise to resolve.
  */
  test('resolve', () => {
    return expect(axios.get('http://localhost:3000/')).resolves.toHaveProperty('status', 200);
  });

  /*
    Check out Jest docs on async code for more on this process https://jestjs.io/docs/asynchronous
  */
});