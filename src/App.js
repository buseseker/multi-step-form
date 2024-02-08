import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PersonelInfo from './components/personel-info/PersonelInfo';
import SelectPlan from './components/select-plan/SelectPlan';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='personel-info' element={<PersonelInfo />} />
        <Route path='select-plan' element={<SelectPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
