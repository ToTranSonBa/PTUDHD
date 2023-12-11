import './App.scss';
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nav from './components/Navigation/nav'
import { useEffect, useState } from 'react';

import AppRoute from './Routes/AppRoutes'

function App() {
  let [account, setAccount] = useState("");
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return (
    <Router>
      <div className='app-header'>
        <Nav />
      </div>

      <div className='app-container'>
        <AppRoute />
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
