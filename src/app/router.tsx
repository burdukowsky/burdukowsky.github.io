import { createBrowserRouter } from 'react-router-dom';

import { Resume } from './routes/resume/Resume';
import { Education } from './routes/education/Education';
import { Contacts } from './routes/contacts/Contacts';
import { ErrorPage } from './routes/error-page/ErrorPage';
import { Root } from './routes/root/Root';
import { Main } from './routes/main/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      { path: 'resume', element: <Resume /> },
      { path: 'edu', element: <Education /> },
      { path: 'contacts', element: <Contacts /> },
    ],
  },
]);
