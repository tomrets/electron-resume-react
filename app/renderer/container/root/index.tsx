import React from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import MyTheme from '@common/components/MyTheme';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function Root() {
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  console.log(currentTheme);

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        history.push(router.url);
      } else {
        history.push(router.url);
      }
    }
  };
  return (
    <div styleName="root" style={{ backgroundColor: currentTheme?.backgroundColor }}>
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">resume 简历平台</div>
        <div styleName="tips">简历平台</div>
        <div styleName="theme">
          <MyTheme />
        </div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div
                key={router.key}
                styleName="item"
                onClick={() => {
                  onRouterToLink(router);
                }}
              >
                {router.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Root;
