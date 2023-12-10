import ErrorBoundary from '../ErrorBoundary.jsx';

/**
 * NOTE: react에서 모든 event는 상위 root div element에서 다룬다.
 * 따라서, 이곳에서 throw 하게 되면 ErrorBoundary 컨텍스트에서 잡히는게 아니라 root의 실행 컨텍스트에서 잡히기 때문에
 * ErrorBoundary와 상관이 없게 된다.
 */
function Child() {
  return (
    <button
      onClick={() => {
        throw new Error('will it be catched?');
      }}
    >
      click
    </button>
  );
}

export default function NotCatchEventHandler() {
  return (
    <ErrorBoundary fallback={<p style={{ color: 'red' }}>Error 발생!</p>}>
      <Child />
    </ErrorBoundary>
  );
}
