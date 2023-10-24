import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowsState from './Context/Shows/ShowsState';
import Home from './Component/Home';
import Series from './Component/Series';
import Page1 from './Component/Series/Pages/PagesNumber/Page1';
import Page2 from './Component/Series/Pages/PagesNumber/Page2';
import Page5 from './Component/Series/Pages/PagesNumber/Page5';
import Page4 from './Component/Series/Pages/PagesNumber/Page4';
import Page3 from './Component/Series/Pages/PagesNumber/Page3';
import Page6 from './Component/Series/Pages/PagesNumber/Page6';
import Page7 from './Component/Series/Pages/PagesNumber/Page7';
import SingleSerie from './Component/SingleSerie';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Series",
    element: <Series />,
  },
  {
    path: "/SingleSerie/:id",
    element: <SingleSerie />,
  },
  {
    path: "/Series/1",
    element: <Page1 />,
  },
  {
    path: "/Series/2",
    element: <Page2 />,
  },
  {
    path: "/Series/3",
    element: <Page3 />,
  },
  {
    path: "/Series/4",
    element: <Page4 />,
  },
  {
    path: "/Series/5",
    element: <Page5 />,
  },
  {
    path: "/Series/6",
    element: <Page6 />,
  },
  {
    path: "/Series/7",
    element: <Page7 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <RouterProvider router={router} />
  </ShowsState>
  
);