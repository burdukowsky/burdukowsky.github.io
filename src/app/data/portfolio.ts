import { Project } from '../types';

export const myProjects: Project[] = [
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
    name: 'keenetic-policy-changer-java',
    platform: 'java',
    description:
      'Changes the policy for a specific device by MAC address on the Keenetic router via Telnet protocol.',
    github: 'https://github.com/burdukowsky/keenetic-policy-changer-java',
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
