import { useRoutes } from 'react-router-dom';
import GeneralApp from './pages/dashboard/GeneralApp';
import GamesTab from './pages/dashboard/GamesTab';
import GeneralPrescription from './pages/dashboard/GeneralPrescription';
import DashboardLayout from './layouts/dashboard';
import AppPatientProfile from './sections/@dashboard/general/app/AppPatientProfile';

export default function Router() {
  return useRoutes([
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <GeneralApp /> },
        { path: 'prescription', element: <GeneralPrescription /> },
        { path: 'tab', element: <AppPatientProfile /> },
      ],
    },
  ]);
}
