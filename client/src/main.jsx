import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './screens/Home.jsx'
import CharacterInfo from './screens/CharacterInfo.jsx';
import SpellsPage from './screens/SpellsPage.jsx';
import Enrollment from './screens/Enrollment.jsx';
import Register from './screens/Register.jsx';
import Login from './screens/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      { path: "character/:id", Component: CharacterInfo },
      { path: "spells", Component: SpellsPage },
      { path: "enroll", Component: Enrollment },
      { path: "register", Component: Register },
      { path: "login", Component: Login }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
