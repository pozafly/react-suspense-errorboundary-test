import { Suspense } from 'react';
import { fetchProfileData } from './fetch';

// fetching 하는 resource가 컴포넌트 외부에 있어야 함.
const resource = fetchProfileData();

function FetchingComponent() {
  const data = resource.posts.read();
  return <p>{data.title}</p>;
}

export default function FetchComponent() {
  return (
    <>
      <Suspense fallback={<p style={{ fontSize: '40px' }}>loading...</p>}>
        <FetchingComponent />
      </Suspense>
    </>
  );
}
