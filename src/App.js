import logo from './MBP LOGO.png';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Commercial from './Pages/Commercial';
import Portraits from './Pages/Portraits';
import Booknow from './Pages/Booknow';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/commercial' element={<Commercial/>}/>
      <Route path='/portraits' element={<Portraits/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/Booknow' element={<Booknow/>}/>


    </Routes>
  );
}

export default App;
