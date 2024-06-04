import { Route, Routes } from 'react-router-dom';
import SportShedule from './SportShedule';
import Swimming from './Swimming';
import SwimmingLessons from './SwimmingLessons';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SportShedule />} />
      <Route path='/swimming' element={<Swimming />} />
      <Route path='/swimming-lessons' element={<SwimmingLessons />} />
    </Routes>
  );
}

export default App;
