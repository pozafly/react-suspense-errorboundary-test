import { Suspense, useState } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import { fetchProfileData } from './fetch.js';

// fetching 하는 resource가 컴포넌트 외부에 있어야 함.
const resource = fetchProfileData();

function FetchingComponent() {
  const data = resource.posts.read();
  return <p>{data.title}</p>;
}

// 에러 표현 컴포넌트.
// ErrorBoundary에서 fallback이 발생하게 하려면 반드시 하위 컴포넌트에서 error가 발생해야 함.
function ErrorComponent({ value }) {
  return <div>{value.toPrecision()}</div>;
}

export default function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Suspense fallback={<p style={{ fontSize: '40px' }}>loading...</p>}>
        <FetchingComponent />
      </Suspense>

      <ErrorBoundary fallback={<p style={{ color: 'red' }}>Error 발생!</p>}>
        <button onClick={() => setValue('1')}>클릭하면 에러 발생</button>
        <ErrorComponent value={value} />
      </ErrorBoundary>
    </>
  );
}
