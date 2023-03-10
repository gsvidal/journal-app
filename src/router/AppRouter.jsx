// import './AppRouter.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login and Register */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Journal App */}
        <Route path="/*" element={<JournalRoutes />} />
      </Routes>
    </>
  );
};
