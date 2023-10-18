
import AboutUsPage from './components/about_us_page/AboutUsPage';
import ContactsPage from './components/contacts_page/ContactsPage';
import FAQPage from './components/faq_page/FAQPage';
import ServicePage from './components/service_page/ServicePage';
import MainPage from './components/main_page/MainPage';
import Header from './components/header/Header';
import {Routes, Route} from 'react-router-dom';
import Profile from './components/profile_page/Profile';
import Footer from './components/Footer';
import AnimWave from './components/wave/AnimWave';
import './style/main.scss'


function App() {
  return (
    <div className="App">
        <div className='background'>
            <AnimWave/>
        </div>
        {/* <div className="main_page_background">
            <div className="main_spotlight_one"></div>
            <div className="main_spotlight_two"></div>
            <div className="main_spotlight_three"></div>

        </div> */}

      <Header/>
      <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/about-us' element={<AboutUsPage/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/faq' element={<FAQPage/>}/>
      <Route path='/contacts' element={<ContactsPage/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  );

}

export default App;