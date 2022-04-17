import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/CheckOut/CheckOut';
import AboutUs from './components/AboutUs/AboutUs';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Footer/Footer';
import NotFound from './components/Login/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
