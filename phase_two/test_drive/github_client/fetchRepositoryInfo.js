const { get } = require('callback-fetch');

const fetchRepositoryInfo = (urlEnder, callbackFunction) => {
  get(`https://api.github.com/repos/${urlEnder}`, callbackFunction);
}

module.exports = fetchRepositoryInfo;