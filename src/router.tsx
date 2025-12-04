import { createBrowserRouter } from 'react-router';
import ErrorPage from './error-page';
import Layout from './routes/Layout';
import Main from './routes/Main';
import Instructor from './routes/Instructor';
import Contact from './routes/Contact';

export const router = createBrowserRouter(
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
    basename: 'tyca',
  }
);
