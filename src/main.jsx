import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

import { HomeScreen } from "./Screens/HomeScreen/HomeScreen.jsx";
import PrivacyPolicy from "./Screens/PrivacyPolicy/PrivacyPolicy.jsx";
import AccountDeletion from "./Screens/AccountDeletion/AccountDeletion.jsx";
import LoginScreen from "./Screens/LoginScreen/LoginScreen.jsx";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen.jsx";
import ContactScreen from "./Screens/ContactScreen/ContactScreen.jsx";
import AboutUsScreen from "./Screens/AboutUsScreen/AboutUsScreen.jsx";
import TaskList from "./Components/TaskList/TaskList.jsx";
import SalahTrack from "./Components/SalahTracker/SalahTrack.jsx";
import TRackerContainer from "./Components/TrackerContainer/TRackerContainer.jsx";
import QuranTracker from "./Components/QuranTracker/QuranTracker.jsx";
import { store } from "./redux/store/store.js";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />}>
        
        
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/delete-account" element={<AccountDeletion />} />
      <Route path="/login" element={<LoginScreen/>} />
      <Route path="/registration" element={<RegisterScreen/>} />
      <Route path="/contactUs" element={<ContactScreen/>} />
      <Route path="/aboutUs" element={<AboutUsScreen/>} />
      
      <Route path="" element={<PrivateRoute/>} >
      <Route path="/trackerContainer" element={<TRackerContainer/>} >
          <Route path="salah" element={<SalahTrack/>} />
          <Route path="task" element={<TaskList/>} />
          <Route path="quran" element={<QuranTracker/>} />
      </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
