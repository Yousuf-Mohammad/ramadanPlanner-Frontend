import './App.css'
import Navbar from './shared/Navbar/Navbar'
import Footer from './shared/Footer/Footer';
import { Outlet } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
        <>
          <Navbar/>
            <main >
             
              <Outlet/>
              
            </main>
            <Footer/>
            <ToastContainer/>
        </>
  )
}

export default App
