import {
  commonGet,
  commonPost,
  commonPut,
  commonDelete
} from './../utils/request';
import { secExtUrl } from './../consts/urlConsts';

export const extendSystemAction = () => {
  return commonGet(`${secExtUrl.opSearchMenusUrl}?nodeName=${''}&type=25`);
};

export const allPermsAction = () => {
  return commonGet(`${secExtUrl.opMenusUrl}?type=25`);
}
