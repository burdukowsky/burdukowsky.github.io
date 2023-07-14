import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import { Project } from 'app/types';
import styles from './ProjectView.module.scss';
import { Space } from 'app/components/space/Space';
import { Icon } from 'app/components/icon/Icon';
import { ProjectLinkContent } from '../project-link-content/ProjectLinkContent';
import { AppText } from 'app/components/app-text/AppText';

interface Props {
  value: Project;
  border?: boolean;
  style?: CSSProperties;
}

export const ProjectView: FC<Props> = ({
  value: { name, platform, description, link, github, downloadLink, demoLink },
  border,
  style,
}) => {
  return (
    <div
      className={classNames(styles.ProjectView, {
        [styles.ProjectViewWithBorder]: border,
      })}
      style={style}
    >
      <Space direction='column' gap='8px' inline childrenFlex={[, , 1]}>
        <Space gap='15px' alignItems='center'>
          <Icon name={platform} size='30px' />
          <AppText as='h3' size='1rem' className='m-0'>
            {name}
          </AppText>
        </Space>
        <AppText as='p' size='.9rem'>
          {description}
        </AppText>
        <div />
        <Space
          gap='5px 1em'
          alignItems='center'
          justifyContent='space-evenly'
          wrap
        >
          {link != null && (
            <a href={link} target='_blank' rel='noreferrer'>
              <ProjectLinkContent icon='link'>Link</ProjectLinkContent>
            </a>
          )}
          <a href={github} target='_blank' rel='noreferrer'>
            <ProjectLinkContent icon='github'>Github</ProjectLinkContent>
          </a>
          {downloadLink != null && (
            <a href={downloadLink} download>
              <ProjectLinkContent icon='download'>Download</ProjectLinkContent>
            </a>
          )}
          {demoLink != null && (
            <a href={demoLink} target='_blank' rel='noreferrer'>
              <ProjectLinkContent icon='link'>Demo</ProjectLinkContent>
            </a>
          )}
        </Space>
      </Space>
    </div>
  );
};
