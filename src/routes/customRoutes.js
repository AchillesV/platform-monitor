import { combineRoutes } from 'amos-pluggable';

/**
 * 系统自定义路由
 */
const customRoutes = [
// { path: 'stage/:objkey', component: StageLayout, parent: 'ruledesign' }
];

/**
 * path mapping
 *
 * import { parseText } from 'amos-tool';
 * const stage = parseText(pathMapping.stage, { objkey });
 */
export const pathMapping = {
// stage: '/main/config/rulecenter/stage/{objkey}'
};

/**
 *  将自定义路由添加到主路由上
 * @param {*} mainRoutes
 */
const addCustomRoutes = (mainRoutes) => combineRoutes(mainRoutes, customRoutes);

export default addCustomRoutes;
