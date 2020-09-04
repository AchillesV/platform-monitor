
const compeleteMenus = (pageCompontent) => {
  return function convertMenus(menus, resRoutes, level) {
    menus.map(menu => {
      if (menu.url) {
        const urlList = menu.url.split('/');
        const path = urlList[level + 1];
        if (urlList.length > 2) {
          const itemRoutes = { path, component: pageCompontent(path), childRoutes: [], group: urlList[1] };
          //特殊处理 地址（url）分割后个数大于当前循环层级时
          if (urlList.length > level + 2) {
            let _itemRoutes = itemRoutes.childRoutes;
            for (let i = level + 2; i < urlList.length; i++) {
              const newItemRoutes = { path: urlList[i], component: pageCompontent(urlList[i]), childRoutes: [] };
              _itemRoutes.push(newItemRoutes);
              _itemRoutes = newItemRoutes.childRoutes;
            }
          }
          if (menu.children && menu.children.length > 0) {
            convertMenus(menu.children, itemRoutes.childRoutes, level + 1);
          }
          resRoutes.push(itemRoutes);
        } else {
          if (menu.children && menu.children.length > 0) {
            convertMenus(menu.children, resRoutes, level);
          }
        }
      }
    });
  };
};

const filterGroupMenus = (routes, groups) => {
  const groupMenus = {};
  groups.forEach(g => {
    groupMenus[g] = routes.filter(r => r.group === g);
  });
  return groupMenus;
};

/**
 * 根据用户菜单数据生成对应的路由
 * @param {array} menus
 * @param {function} pageCompontent
 * @param {array} group 分组 ['main', 'other']
 * @return {object|array} group存在： { main: [...], other: [...] }, group 不存在: []
 */
export default function calcRoutes(menus = [], pageCompontent, groups) {
  const _routes = [];
  if (menus && menus.length > 0) {
    compeleteMenus(pageCompontent)(menus, _routes, 1);
    if (groups && groups.length > 0){
      return filterGroupMenus(_routes, groups);
    }
  }
  return _routes;
}
