import React, { useState } from 'react';
import usePreFetch from './usePreFetch';

const importModal = () => import('./Modal');

function App(props) {
  const [isShown, setIsShown] = useState(false);
  const Modal = usePreFetch(importModal);

  return (
    <div>
      <h1>this is part of the first build</h1>
      <button onClick={() => setIsShown(true)}>SHOW MODAL</button>
      <Suspense fallback={<h1>Loading...</h1>}>
        {isShown && <Modal />}
      </Suspense>
    </div>
  )
}