import { createBrowserRouter } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import AccessControl from '../pages/AccessControl'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import ReportPage from '../pages/ReportPage'
import UserManagement from '../pages/UserManagement'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'accesscontrol',
        element: <AccessControl />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'reportpage',
        element: <ReportPage />,
      },
      {
        path: 'usermanagement',
        element: <UserManagement />,
      },
    ],
  },
])
