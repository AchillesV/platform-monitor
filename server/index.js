// @author ilex.h

const express = require('express');

const {
  testData
} = require('./_mock/testMock');

const app = express();
const port = 8087;
const successCode = 200;

const transCommonResponse = (data) => {
  const result = {
    result: 'SUCCESS',
    dataList: data
  };
  return JSON.stringify(result);
};


app.all('*', (req, res, next) => {
  console.log(req.headers.origin);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, X-Access-Token, X-Api-Key, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials','true');
  res.header('X-Powered-By',' 3.2.1');
  if (req.method === 'OPTIONS') {
    // 让options请求快速返回
    res.send(successCode);
  } else {
    next();
  }
});


app.get('/test', (req, res) => {
  const m = testData().dataList;
  res.send(transCommonResponse(m));
});


const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
