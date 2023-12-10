// import ErrorComponent from './errorBoundary/ErrorComponent.jsx';
// import FetchComponent from './fetch/FetchComponent.jsx';
// import LazyComponent from './lazy/LazyComponent.jsx';
import NotCatchEventHandler from './errorBoundary/notCatch/NotCatchEventHandler.jsx';
import NotCatchAsync from './errorBoundary/notCatch/NotCatchAsync.jsx';

export default function App() {
  return (
    <>
      {/* <ErrorComponent /> */}
      {/* <FetchComponent /> */}
      {/* <LazyComponent /> */}
      <NotCatchEventHandler />
      <NotCatchAsync />
    </>
  );
}
