import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

import ChooseActivityArea from './components/ChooseActivityArea';

import ChooseDate from './components/ChooseDate';

import NineFeb from './components/9feb';
import TenFeb from './components/10feb';
import ElevenFeb from './components/11feb';
import TwelveFeb from './components/12feb';


import Success from './components/Success';
import HomePage from './components/HomePage';
import Error from './components/Error';
// import TimeSlot from './components/TimeSlot';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<ChooseDate />} />
          <Route path="/ChooseActivityArea" element={<ChooseActivityArea />} />

          <Route path="/Date/9feb" element={<NineFeb />} />
          <Route path="/Date/:id" element={<TenFeb />} />
          <Route path="/11feb" element={<ElevenFeb />} />
          <Route path="/12feb" element={<TwelveFeb />} />

          <Route path="/Registration" element={<Registration/>} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/:id" element={<Registration/>} />

          {/* <Route path="/User/:id" element={<TimeSlot />} /> */}
          <Route path="/Success" element={<Success />} />
          <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
