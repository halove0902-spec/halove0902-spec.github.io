import { useNavigate, useRouteError } from 'react-router';

export default function ErrorPage() {
  const navigete = useNavigate();
  const error = useRouteError() as Error & { statusText?: string };

  const isChunkLoadError =
    error.message && error.message.includes('Loading chunk');
  const isDynamicImportError =
    error.message &&
    error.message.includes('Failed to fetch dynamically imported module');

  if (isChunkLoadError || isDynamicImportError) {
    console.warn(
      'Detected an error with dynamically loaded module. Reloading the page...'
    );
    navigete('/');
  } else {
    console.error(error);
  }

  return (
    <>
      <div id="error-page">
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
}
