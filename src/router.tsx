import { createHashRouter } from 'react-router';
import ErrorPage from './error-page';
import Layout from './routes/Layout';
import Main from './routes/Main';
import Program from './routes/Program';
import Instructor from './routes/Instructor';
import Contact from './routes/Contact';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: '/program',
          element: <Program />,
        },
        {
          path: '/instructor',
          element: <Instructor />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ],
  {
    // basename: 'tyca',
  }
);
