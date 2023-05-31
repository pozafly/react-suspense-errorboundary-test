import ErrorComponent from './errorBoundary/ErrorComponent.jsx';
import FetchComponent from './fetch/FetchComponent.jsx';
import LazyComponent from './lazy/LazyComponent.jsx';

export default function App() {
  return (
    <>
      <ErrorComponent />
      <FetchComponent />
      <LazyComponent />
    </>
  );
}
