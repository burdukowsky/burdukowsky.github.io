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
