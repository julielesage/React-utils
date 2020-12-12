import React, { Suspense } from 'react';

//Ça chargera automatiquement le bundle contenant le composant OtherComponent 
//quand celui-ci sera rendu pour la première fois.
const OtherComponent = React.lazy(() => import('./OtherComponent'));
//react.lazy ne prend uniquement les export default, ca marche pas avec {}
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Chargement...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

const AnotherComponent = React.lazy(() => import('./AnotherComponent'));
import MyErrorBoundary from './MyErrorBoundary';

function MyComponents() {
  return (
    <div>
      <MyErrorBoundary>
        <Suspense fallback={<div>Chargement...</div>}>
          <section>
            <OtherComponent />
            <AnotherComponent />
          </section>
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
}