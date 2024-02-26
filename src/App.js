import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import PersonelInfo from './pages/personel-info/PersonelInfo';
import SelectPlan from './pages/select-plan/SelectPlan';
import AddOns from './pages/add-ons/AddOns';
import Summary from './pages/summary/Summary';
import SelectedServiceProvider from './context/SelectedServiceContext'; // Context'u doğru şekilde içe aktardık

function App() {
  return (
    <BrowserRouter>
      <SelectedServiceProvider> {/* SelectedServiceProvider bileşenini burada kullanmalısınız */}
        <Routes>
          <Route path='/personel-info' element={<PersonelInfo />} />
          <Route path='/select-plan' element={<SelectPlan />} />
          <Route path='/add-ons' element={<AddOns />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/' element={<Navigate to='/personel-info' />} />
        </Routes>
      </SelectedServiceProvider> {/* Kapatma etiketini ekledik */}
    </BrowserRouter>
  );
}

export default App;
