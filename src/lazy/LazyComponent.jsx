import { Suspense, lazy, useState } from 'react';

export default function LazyComponent() {
  const [isShowImage, setIsShowImage] = useState(false);
  const Image = isShowImage ? lazy(() => import('./Image.jsx')) : null;

  return (
    <>
      <button onClick={() => setIsShowImage(!isShowImage)}>
        클릭하면 이미지 나타남
      </button>
      <div
        style={{
          width: '400px',
          background: '#d18585',
          verticalAlign: 'middle',
        }}
      >
        {isShowImage ? (
          <Suspense
            fallback={
              <span style={{ fontSize: '20px' }}>lazy test loading..</span>
            }
          >
            <Image />
          </Suspense>
        ) : null}
      </div>
    </>
  );
}
