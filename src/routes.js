import { useRoutes } from 'react-router-dom';
import GeneralApp from './pages/dashboard/information/GeneralApp';
import GeneralPrescription from './pages/dashboard/information/GeneralPrescription';
import GeneralTreatment from './pages/dashboard/information/GeneralTreatment';
import DashboardLayout from './layouts/dashboard';
import AppPatientProfile from './sections/@dashboard/general/app/AppPatientProfile';
import AppPatientGame from './sections/@dashboard/general/app/AppPatientGame';
import GeneralCognitive from './pages/dashboard/information/GeneralCognitive';

export default function Router() {
  return useRoutes([
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <GeneralApp /> },
        { path: 'prescription', element: <GeneralPrescription /> },
        { path: 'treatment', element: <GeneralTreatment /> },
        { path: 'cognitive', element: <GeneralCognitive /> },
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
