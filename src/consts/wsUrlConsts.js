import * as endConf from 'amos-processor/lib/config/endconf';

const completePrefix = endConf.completePrefix;

const AmosConfig = endConf.AmosConfig;
const baseURI = AmosConfig.wsURI.baseURI;


export default {
  testWs: completePrefix(baseURI, '')
};
