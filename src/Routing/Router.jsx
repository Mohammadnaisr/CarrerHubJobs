import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Applied from '../Pages/AppliedJobs';
import Blogs from '../Pages/Blogs';
import AppliedJobs from '../Pages/AppliedJobs';
import Jobs from '../Pages/Jobs';
import JobDetails from '../Components/JobDetails';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />,
      },

      {
        path: '/Blogs',
        element: <Blogs />,
      },
      {
        path: '/JobDetails/:company_name',
        element: <JobDetails />,
      },
    ],
  },
]);
export default Router;

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/blog',
//         element: <Blogs />,
//       },
//       {
//         path: '/favourite',
//         element: <Favourite />,
//       },
//       {
//         path: '/countryDetails/:countryName',
//         element: <CountryDetails />,
//       },
//     ],
//   },
// ]);
