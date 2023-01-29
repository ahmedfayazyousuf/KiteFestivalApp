import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";

import ChooseActivityArea from './components/ChooseActivityArea';

import ChooseDate from './components/ChooseDate';

import Success from './components/Success';
import Error from './components/Error';
import TimeSlot from './components/TimeSlot';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<ChooseDate />} />
          <Route path="/ChooseActivityArea" element={<ChooseActivityArea />} />

          <Route path="/Registration" element={<Registration/>} />
          <Route path="/:id" element={<Registration/>} />

          <Route path="/User/:id" element={<TimeSlot />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/Error" element={<Error />} />
      </Routes>
    </>
  )
}
export default App
