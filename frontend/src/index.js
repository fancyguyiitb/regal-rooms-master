// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import RoomProvider from './context/RoomContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RoomProvider>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </RoomProvider>
// );

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import RoomProvider from "./context/RoomContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoomProvider>
      <App />
    </RoomProvider>
  </React.StrictMode>
);
