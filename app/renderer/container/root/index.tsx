import React from 'react';
import './index.less';
import { shell } from 'electron';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';

function Root() {
  const history = useHistory();

  const onRouterToLink = (text: string) => {
    if (text === '简历') {
      history.push('/resume');
    } else {
      shell.openExternal('https://github.com/PDKSophia/visResumeMook');
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">resume 简历平台</div>
        <div styleName="tips">简历平台</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div key={index} styleName="item" onClick={() => onRouterToLink(text)}>
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Root;
