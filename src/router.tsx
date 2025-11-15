import { createBrowserRouter } from 'react-router';
import Layout from './routes/Layout';
import Main from './routes/Main';
import ErrorPage from './error-page';

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
      ],
    },
  ],
  {
    basename: 'tyca',
  }
);
