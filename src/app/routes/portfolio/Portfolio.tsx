import { FC, Fragment, useMemo } from 'react';

import { Project } from '../../types';
import { Space } from '../../components/space/Space';
import { ProjectView } from './components/project-view/ProjectView';
import { AppText } from '../../components/app-text/AppText';
import { splitPairs } from '../../utils/common';
import {
  useExtraMobileMediaQuery,
  useMobileMediaQuery,
} from '../../hooks/media-queries';

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
  const extraMobile = useExtraMobileMediaQuery();
  const mobile = useMobileMediaQuery();

  const pairs = useMemo(() => {
    return splitPairs(myProjects);
  }, []);

  const mobileGap = '1.5em';

  return (
    <Space direction='column' gap='.5em'>
      <AppText as='h2' align='center' className='mt-0'>
        Some of my pet-projects
      </AppText>
      <Space direction='column' gap={mobile ? mobileGap : '1em'}>
        {pairs.map((pair, pairIndex) => {
          return (
            <Space
              key={pairIndex}
              gap={mobile ? mobileGap : '2em'}
              childrenFlex={['1 1 0', '1 1 0']}
              wrap
              direction={extraMobile ? 'column' : undefined}
            >
              {pair.map((p, i) => (
                <Fragment key={i}>
                  <ProjectView
                    value={p}
                    border={!extraMobile}
                    style={{
                      width: '100%',
                      height: extraMobile ? undefined : '100%',
                    }}
                  />
                  {extraMobile &&
                    !(
                      pairIndex === pairs.length - 1 && i === pair.length - 1
                    ) && <hr style={{ marginTop: mobileGap }} />}
                </Fragment>
              ))}
            </Space>
          );
        })}
      </Space>
    </Space>
  );
};
