
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/firstPage/homePage/HomePage';
import Header from './components/header/Header';
import PortfolioPage from './components/PortfolioRoute/PortfolioPage';
import ErrorPage from './components/errorPage/ErrorPage';
import Footer from './components/firstPage/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
     <Route path='/resume' element={<HomePage/>}/> 
     <Route path='resume/portfolio' element={<PortfolioPage/>}/> 
     <Route path='*' element={<ErrorPage/>}/> 
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
