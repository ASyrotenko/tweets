import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const TweetsPage = lazy(() => import('./components/pages/TweetsPage'));

const UseRoutes = () => {
  return (
    <Routes>
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default UseRoutes;
