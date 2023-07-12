import { FC, useMemo } from 'react';

import { Project } from '../../types';
import { Space } from '../../components/space/Space';
import { ProjectView } from './components/project-view/ProjectView';
import { AppText } from '../../components/app-text/AppText';
import { splitPairs } from '../../utils/common';

const myProjects: Project[] = [
  {
    name: 'MPC-HC Remote Control beta',
    platform: 'android',
    description:
      'Application for remote control of the MPC-HC video player through the built-in web server.',
    github: 'https://github.com/burdukowsky/mpc-hc-android',
    downloadLink:
      'https://github.com/burdukowsky/mpc-hc-android/raw/master/apk/release/mpc_hc_remote_control_beta.apk',
  },
  {
    name: 'cron-editor-ngx-translate',
    platform: 'npm',
    description:
      'A fork of the cron-editor that allows you to use the editor along with ngx-translate.',
    link: 'https://www.npmjs.com/package/cron-editor-ngx-translate',
    github: 'https://github.com/burdukowsky/cron-editor-ngx-translate',
    demoLink: 'https://burdukowsky.github.io/cron-editor-ngx-translate/',
  },
  {
    name: 'Copy Page URL',
    platform: 'extension',
    description:
      'Firefox extension that adds browser action icon to toolbar to copy web page URL.',
    link: 'https://addons.mozilla.org/en-US/firefox/addon/copy-web-page-url/',
    github: 'https://github.com/burdukowsky/copy-page-url-firefox-extension',
  },
  {
    name: 'My Calendar beta',
    platform: 'android',
    description: 'Calendar for Android.',
    github: 'https://github.com/burdukowsky/my-calendar',
    downloadLink:
      'https://github.com/burdukowsky/my-calendar/raw/master/apk/my-calendar-beta.apk',
  },
];

export const Portfolio: FC = () => {
  const pairs = useMemo(() => {
    return splitPairs(myProjects);
  }, []);

  return (
    <Space direction='column' gap='.5em'>
      <AppText as='h2' align='center' className='mt-0'>
        Some of my pet-projects
      </AppText>
      <Space direction='column' gap='1em'>
        {pairs.map((pair, pairIndex) => {
          return (
            <Space key={pairIndex} gap='2em' childrenFlex={['1 1 0', '1 1 0']}>
              {pair.map((p, i) => (
                <ProjectView key={i} value={p} />
              ))}
            </Space>
          );
        })}
      </Space>
    </Space>
  );
};
