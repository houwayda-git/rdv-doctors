import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Labo from './components/Labo';
import Doctor from './components/Doctor';
import Pharma from './components/Pharma';
import Rdv from './components/Rdv';
import Connect from './components/Connect';



function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/' element={<Connect />} />
        <Route exact path='/labo' element={<Labo />} />
        <Route exact path='/doctor' element={<Doctor />} />
        <Route exact path='/Pharma' element={<Pharma />} />
        <Route exact path='/rdv' element={<Rdv />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
