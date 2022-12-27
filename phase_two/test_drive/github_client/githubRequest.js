// Load the `get` function.
const { get } = require('callback-fetch');

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call `get` and provide the handler callback function.
// This will get called by `get` when the response is received.
get(url, (body) => {
  const responseObject = JSON.parse(body);
  console.log(responseObject);
});