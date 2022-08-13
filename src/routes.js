import { useRoutes } from 'react-router-dom';
import GeneralApp from './pages/dashboard/GeneralApp';
import GamesTab from './pages/dashboard/GamesTab';
import DashboardLayout from './layouts/dashboard';

export default function Router() {
  return useRoutes([
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <GeneralApp /> },
        { path: 'tab', element: <GamesTab /> },
      ],
    },
  ]);
}
