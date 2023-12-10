import ErrorBoundary from '../ErrorBoundary.jsx';

/**
 * NOTE: 실행 컨텍스트가 ErrorBoundary 내에 있지 않다.
 * 비동기 코드는 모든 실행 컨텍스트가 종료된 후 다시 task queue에서 call stack으로 넘어오기 때문이다.
 * 그 때는 이미 ErrorBoundary 실행 컨텍스트가 종료된 후임.
 */
function Child() {
  function throwErrorFn() {
    throw new Error('will it be catched?');
  }
  setTimeout(throwErrorFn, 1000);
  return <div></div>;
}

export default function NotCatchAsync() {
  return (
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
}
