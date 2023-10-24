import Header from './Component/header/Header';
import './App.css';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Series from './Component/Series/Series';
import Footer from './Component/Footer/Footer';
import SingleSerie from './Component/SingleSerie';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
AOS.init();

const App =()=> {
  return (
    <div className="App" data-aos="fade-right">
    </div>
  );
}

export default App;
{/*       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Series' element={<Series/>} />   
        <Route path="/singleshow/:id" component={<SingleSerie />}/>
      </Routes>  */}