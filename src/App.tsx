import './App.css';
import { Homepage } from './pages/Homepage';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Nutripoint } from './pages/Projects/Nutripoint';
import { SkateRider } from './pages/Projects/SkateRider';
import { Universalis } from './pages/Projects/Universalis';
import { SkateRider as DownloadSkateRider } from './pages/Download/SkateRider';
import { Universalis as DownloadUniversalis } from './pages/Download/Universalis';
import { SkateRiderPrivacy } from './pages/Privacy/SkateRiderPrivacy';
import { UniversalisPrivacy } from './pages/Privacy/UniversalisPrivacy';

function App() {
  const router = createHashRouter(
    [
      { path: '/', element: <Homepage /> },
      { path: '/nutripoint', element: <Nutripoint /> },
      { path: '/skate-rider', element: <SkateRider /> },
      { path: '/universalis', element: <Universalis /> },
      {
        path: '/download/universalis',
        element: <DownloadUniversalis />,
      },
      {
        path: '/download/skate-rider',
        element: <DownloadSkateRider />,
      },
    ],
    { basename: '/' }
  );

  return <RouterProvider router={router} />;
}

export default App;
