import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      {/* @ts-ignore */}
      <h1>Error {error.status}</h1>

      {/* @ts-ignore */}
      <p>{error.statusText}</p>
    </div>
  );
}

export default ErrorPage;
