import React from 'react';

export const routes =[
  {
    path: "/",
    exact: true,
    component: React.lazy(() => import("./pages/page1"))
  },
  {
    path: "/page2",
    exact: true,
    component: React.lazy(() => import("./pages/page2"))
  },
  {
    path: "*",
    exact: true,
    component: React.lazy(() => import("./pages/not-found"))
  },
]