import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import ChooseDate from './components/ChooseDate';

import NineFeb from './components/9feb';
import TenFeb from './components/10feb';

import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import Success from './components/Success';
import HomePage from './components/HomePage';
import Error from './components/Error';
// import TimeSlot from './components/TimeSlot';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/9feb" element={<NineFeb />} />
          <Route path="/Date/:id" element={<TenFeb />} />

          <Route path="/Registration" element={<Registration/>} />
          <Route path="/AdminPanel" element={<AdminPanel/>} />
          <Route path="/AdminLogin" element={<AdminLogin/>} />
          <Route path="/choosedate" element={<ChooseDate />} />
          <Route path="/:id" element={<Registration/>} />

          {/* <Route path="/User/:id" element={<TimeSlot />} /> */}
          <Route path="/Success" element={<Success />} />
          <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
