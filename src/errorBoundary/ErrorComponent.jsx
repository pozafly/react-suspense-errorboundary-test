import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';

// 에러 표현 컴포넌트.
// ErrorBoundary에서 fallback이 발생하게 하려면 반드시 하위 컴포넌트에서 error가 발생해야 함.
function Child({ errorValue }) {
  return <div>{errorValue.toPrecision()}</div>;
}

export default function ErrorComponent() {
  const [errorValue, setErrorValue] = useState(0);

  return (
    <div>
      <ErrorBoundary fallback={<p style={{ color: 'red' }}>Error 발생!</p>}>
        <button onClick={() => setErrorValue('1')}>클릭하면 에러 발생</button>
        <Child errorValue={errorValue} />
      </ErrorBoundary>
    </div>
  );
}
