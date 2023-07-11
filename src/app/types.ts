export type Theme = 'default' | 'dark-theme';

export interface XP {
  position: string;
  org: string;
  orgSite?: string;
  from: string;
  to: string;
  location: string;
  description?: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Edu {
  title: string;
  qualification: string;
  form: string;
  org: string;
  orgSite?: string;
  from: string;
  to: string;
  location: string;
  achievements?: string[];
}

export type ProjectPlatform = 'android' | 'npm' | 'extension';

export interface Project {
  name: string;
  platform: ProjectPlatform;
  description: string;
  link?: string;
  github: string;
  downloadLink?: string;
  demoLink?: string;
}
