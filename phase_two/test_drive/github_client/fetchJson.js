const { get } = require('callback-fetch');

const handleReceivedResponse = (body) => {
  const responseObject = JSON.parse(body);
  console.log(responseObject);
}
