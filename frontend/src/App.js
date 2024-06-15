import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/room/:id",
//     element: <RoomDetails />,
//   },
// ]);
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
