import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PersonelInfo from './components/personel-info/PersonelInfo';
import SelectPlan from './components/select-plan/SelectPlan';
import AddOns from './components/add-ons/AddOns';
import Summary from './components/summary/Summary';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='personel-info' element={<PersonelInfo />} />
        <Route path='select-plan' element={<SelectPlan />} />
        <Route path='add-ons' element={<AddOns />} />
        <Route path='summary' element={<Summary />} />
        <Route path='/' element={<Navigate to='/personel-info' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
