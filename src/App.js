import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./container/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HotelDetails from "./container/HotelDetails";
import Login from "./container/Login";
import Layout from "./container/Layout";



function App() {
  return <div className="">
    {/* LAYOUT of the APP */}
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Layout>
        <Home />
      </Layout>}/>
      <Route path="/hotel-details/:slug" element={<Layout>
        <HotelDetails />
      </Layout>}/>
    </Routes>
    </BrowserRouter>
   
    
    
  </div>;
}

export default App;
