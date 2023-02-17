import React from 'react';
import './index.less';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

function Resume() {
  // 👇 读取一下当前这个文件内容
  getAppPath().then((rootPath: string) => {
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(1);
    });
  });

  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
}

export default Resume;
