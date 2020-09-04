/* eslint no-magic-numbers: 0 */

const Mock = require('mockjs');


const testData = () => {
  return Mock.mock({
    'dataList|39-40': [{
      'id': '@guid',
      'name': '@name',
      'displayName': '@cname'
    }]
  });
};

module.exports = {
  testData
};
