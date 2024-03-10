import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { HomeScreen } from "./Screens/HomeScreen/HomeScreen.jsx";
import PrivacyPolicy from "./Screens/PrivacyPolicy/PrivacyPolicy.jsx";
import AccountDeletion from "./Screens/AccountDeletion/AccountDeletion.jsx";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen.jsx";
import ContactScreen from "./Screens/ContactScreen/ContactScreen.jsx";
import AboutUsScreen from "./Screens/AboutUsScreen/AboutUsScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/delete-account" element={<AccountDeletion />} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/registration" element={<RegisterScreen/>} />
      <Route path="/contactUs" element={<ContactScreen/>} />
      <Route path="/aboutUs" element={<AboutUsScreen/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
