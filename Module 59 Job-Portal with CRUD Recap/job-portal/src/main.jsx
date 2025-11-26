import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import JobDetails from './Components/Jobs/JobDetails.jsx';
import PrivateRoute from './Router/PrivateRoute.jsx';
import JobApply from './Components/Jobs/JobApply.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },

      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/jobs/:id",
         Component: JobDetails,
         loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path: 'jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)