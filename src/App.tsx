import './App.css';
import { Homepage } from './pages/Homepage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Nutripoint } from './pages/Projects/Nutripoint';
import { SkateRider } from './pages/Projects/SkateRider';
import { Universalis } from './pages/Projects/Universalis';
import { SkateRider as DownloadSkateRider } from './pages/Download/SkateRider';
import { Universalis as DownloadUniversalis } from './pages/Download/Universalis';
import { SkateRiderPrivacy } from './pages/Privacy/SkateRiderPrivacy';
import { UniversalisPrivacy } from './pages/Privacy/UniversalisPrivacy';

function App() {
  const router = createBrowserRouter([
    { path: '/Portfolio', element: <Homepage /> },
    { path: '/Portfolio/nutripoint', element: <Nutripoint /> },
    { path: '/Portfolio/skate-rider', element: <SkateRider /> },
    { path: '/Portfolio/universalis', element: <Universalis /> },
    {
      path: '/Portfolio/download/universalis',
      element: <DownloadUniversalis />,
    },
    {
      path: '/Portfolio/download/skate-rider',
      element: <DownloadSkateRider />,
    },
    { path: '/Portfolio/privacy', element: <SkateRiderPrivacy /> },
    { path: '/Portfolio/universalis/privacy', element: <UniversalisPrivacy /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
