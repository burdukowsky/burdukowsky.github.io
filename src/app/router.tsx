import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Root } from './routes/root/Root';
import { Experience } from './routes/experience/Experience';
import { Education } from './routes/education/Education';
import { Portfolio } from './routes/portfolio/Portfolio';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Navigate to='/' replace={true} />,
    children: [
      { index: true, element: <Experience /> },
      { path: 'edu', element: <Education /> },
      { path: 'portfolio', element: <Portfolio /> },
    ],
  },
]);
