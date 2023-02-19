import React, { useEffect } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from '@src/container/templateList';
import ROUTER from '@common/constants/router';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useThemeActionHooks from './hooks/useThemeActionHooks';
function Router() {
  //  todo 路由可配置化 原来配置化 可以中间加个拦截器 如果未登陆 则重定向到首页
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();
  useEffect(() => {
    initThemeConfig();
    readDirAssetsTemplateHooks();
  }, []);

  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加 exact */}
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
        <Route path={ROUTER.templateList} exact>
          <TemplateList />
        </Route>
      </Switch>
      {/* 默认重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
