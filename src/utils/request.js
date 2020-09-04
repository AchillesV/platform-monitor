import amosRequest, {
  commonGet,
  commonPost,
  commonPut,
  commonDelete
} from 'amos-processor/lib/fetch/amosRequest';
import * as xssAmosRequest from 'amos-processor/lib/fetch/xssRequest';
import { AmosFetch, XssAmosFetch } from 'amos-processor';
import { utils } from 'amos-tool';
import formatUrl from 'amos-processor/lib/utils/urlFormat';
import { getToken } from 'amos-security/lib/utils/tokenUtils';

const defaultPageable = {
  page: 0, size: 10
};

/**
 * 构建分页
 */
const buildPageable = (url, pageable = defaultPageable) => {
  let { page, size } = pageable;
  return `${url}?page=${page}&size=${size}`;
};

/**
 * 转换指定值为 JSON
 * @param {array} dataList
 * @param {string} key
 */
const convertDatalist = (dataList = [], key = 'content') => {
  const newDL = dataList.map(d => {
    if (!utils.isNil(d[key]) && utils.isString(d[key])){
      d[key] = JSON.parse(d[key]);
    }
    return d;
  });
  return newDL;
};

export {
  AmosFetch,
  XssAmosFetch,
  amosRequest,
  commonGet,
  commonPost,
  commonPut,
  commonDelete,
  xssAmosRequest,
  convertDatalist,
  buildPageable,
  formatUrl,
  getToken
};
