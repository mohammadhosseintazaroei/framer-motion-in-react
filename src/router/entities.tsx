import { type ReactNode } from 'react';
import Home from '../components/home';
import { GitHubPage } from '../components/github';
import { HomeCard } from '../components/menu-card/home';
import { GitCard } from '../components/menu-card/github/github-card';
import { SocialsCard } from '../components/menu-card/socials/socials-card';
import { ProjectsCard } from '../components/menu-card/projects/projects-card';

interface Entity {
  title?: string;
  path: string;
  element?: ReactNode;
  icon?: ReactNode;
  menuCard?: ReactNode;
}

export const panelEntities: Entity[] = [
  {
    path: '/',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'GitHub',
    path: '/github',
    element: <GitHubPage />,
    menuCard: <GitCard />,
  },
  {
    title: 'Socials',
    path: '/socials',
  },
  {
    title: 'Me',
    path: '/me',
  },
];
