import { useRoutes } from 'react-router-dom';
import GeneralApp from './pages/dashboard/information/GeneralApp';
import GeneralPrescription from './pages/dashboard/information/GeneralPrescription';
import DashboardLayout from './layouts/dashboard';
import AppPatientProfile from './sections/@dashboard/general/app/AppPatientProfile';
import AppPatientGame from './sections/@dashboard/general/app/AppPatientGame';
import GeneralCognitive from './pages/dashboard/information/GeneralCognitive';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <GeneralApp /> },
        { path: 'prescription', element: <GeneralPrescription /> },
        { path: 'point', element: <GeneralCognitive /> },
        { path: 'total', element: <AppPatientGame /> },
        { path: 'tab', element: <AppPatientProfile /> },
        { path: 'biz', element: <AppPatientProfile /> },
        { path: 'room', element: <AppPatientProfile /> },
        { path: 'card', element: <AppPatientProfile /> },
        { path: 'racing', element: <AppPatientProfile /> },
      ],
    },
  ]);
}
