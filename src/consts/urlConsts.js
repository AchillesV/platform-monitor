import * as endConf from 'amos-processor/lib/config/endconf';
import completeSecurityUrl, { completeSecurityWsUrl } from 'amos-security/lib/consts/securityUrl';

const completePrefix = endConf.completePrefix;

const securityBaseURI = endConf.securityBaseURI;
const AmosConfig = endConf.AmosConfig;
const securityBaseWsURI = AmosConfig.wsURI.securityBaseURI;

export const SecurityUrl = completeSecurityUrl(securityBaseURI);
export const SecurityWsUrl = completeSecurityWsUrl(securityBaseWsURI);

export const secExtUrl = {
  //*************************************
  //  op 内置接口url
  //*************************************
  opMenusUrl: completePrefix(securityBaseURI,'permissionItem/allPermission-tree'),
  opSearchMenusUrl: completePrefix(securityBaseURI,'permissionItem/searchPermission-tree?nodeName={nodeName}&type={type}')
};

export default {

};
