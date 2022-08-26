import { useRoutes } from 'react-router-dom';
import Overview from './pages/dashboard/information/Overview';
import Total from './pages/dashboard/information/Total';
import Point from './pages/dashboard/information/Point';
import DashboardLayout from './layouts';
import PatientProfile from './sections/@dashboard/user/profile/PatientProfile';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Overview /> },
        { path: 'total', element: <Total /> },
        { path: 'point', element: <Point /> },
        { path: 'tab', element: <PatientProfile /> },
        { path: 'biz', element: <PatientProfile /> },
        { path: 'room', element: <PatientProfile /> },
        { path: 'card', element: <PatientProfile /> },
        { path: 'racing', element: <PatientProfile /> },
      ],
    },
  ]);
}
