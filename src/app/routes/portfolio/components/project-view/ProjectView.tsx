import { FC } from 'react';

import { Project } from 'app/types';
import styles from './ProjectView.module.scss';
import { Space } from 'app/components/space/Space';
import { Icon } from 'app/components/icon/Icon';
import { ProjectLinkContent } from '../project-link-content/ProjectLinkContent';

interface Props {
  value: Project;
}

export const ProjectView: FC<Props> = ({
  value: { name, platform, description, link, github, downloadLink, demoLink },
}) => {
  return (
    <Space
      className={styles.ProjectView}
      direction='column'
      inline
      childrenFlex={[, , 1]}
    >
      <Space gap='15px' alignItems='center'>
        <Icon name={platform} size='30px' />
        <h3>{name}</h3>
      </Space>
      <p>{description}</p>
      <div />
      <Space gap='1em' alignItems='center' justifyContent='space-evenly'>
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
  );
};
