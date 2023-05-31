import { Suspense, useState } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import { fetchProfileData } from './logic.js';

const resource = fetchProfileData();

function Children({ value }) {
  const data = resource.posts.read();
  return (
    <>
      <p>{data.title}</p>
      <div>{value.toPrecision()}</div>
    </>
  );
}

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <ErrorBoundary fallback={<p>something wrong!</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <div>App</div>
        <button onClick={() => setValue('1')}>click</button>
        <Children value={value} />
      </Suspense>
    </ErrorBoundary>
  );
}
