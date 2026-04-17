import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';
import Home from '../Pages/Home';
import TimeLine from '../Pages/TimeLine';

const Root = () => {
   return (
      <div>
         <NavBar/>
        <Outlet>
         <Home/>
         <TimeLine/>
        </Outlet>
         <Footer/>
      </div>
   );
};

export default Root;