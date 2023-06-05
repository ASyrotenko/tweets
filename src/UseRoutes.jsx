import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const TweetsPage = lazy(() => import('./components/pages/TweetsPage'));

const UseRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="loading__container">
          <TailSpin color="#5cd3a8" />
        </div>
      }
    >
      <Routes>
        <Route path="/users" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UseRoutes;
