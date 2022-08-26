import { useRoutes } from 'react-router-dom';
import GeneralApp from './pages/dashboard/information/GeneralApp';
import DashboardLayout from './layouts';
import AppPatientProfile from './sections/@dashboard/general/app/AppPatientProfile';
import GeneralCognitive from './pages/dashboard/information/GeneralCognitive';
import GeneralTotal from './pages/dashboard/information/GeneralTotal';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <GeneralApp /> },
        { path: 'point', element: <GeneralCognitive /> },
        { path: 'total', element: <GeneralTotal /> },
        { path: 'tab', element: <AppPatientProfile /> },
        { path: 'biz', element: <AppPatientProfile /> },
        { path: 'room', element: <AppPatientProfile /> },
        { path: 'card', element: <AppPatientProfile /> },
        { path: 'racing', element: <AppPatientProfile /> },
      ],
    },
  ]);
}
