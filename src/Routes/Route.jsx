import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import PageNotFound from "../pages/PageNotFound";
import LawyearDetails from "../pages/LawyearDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound />,
    children: [
      { index: true, Component: Home, loader: () => fetch("/LowYear.json") },
      { path: "/", Component: Home },
      { path: "/bookings", Component: MyBookings, loader: () => fetch("/LowYear.json") },
      { path: "/blogs", Component: Blogs, loader: () => fetch("/Blog.json") },
      {
        path: "lawyear/:id",
        Component: LawyearDetails,
        loader: () => fetch("/LowYear.json"),
      },
    ],
  },
  {
    path: "/blogs",
    Component: Blogs,
    loader: () => fetch("/blog.json"),
  },
]);

export default router;