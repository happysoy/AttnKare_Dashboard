import { useRoutes } from 'react-router-dom';
import GeneralApp from './pages/dashboard/GeneralApp';
import GeneralPrescription from './pages/dashboard/GeneralPrescription';
import GeneralTreatment from './pages/dashboard/GeneralTreatment';
import DashboardLayout from './layouts/dashboard';
import AppPatientProfile from './sections/@dashboard/general/app/AppPatientProfile';
import GeneralCognitive from './pages/dashboard/GeneralCognitive';

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
        { path: 'tab', element: <AppPatientProfile /> },
        { path: 'biz', element: <AppPatientProfile /> },
      ],
    },
  ]);
}
