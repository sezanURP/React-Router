import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router';
import Home from '../Pages/Home';
import TimeLine from '../Pages/TimeLine';
import Stats from '../Pages/Stats';

const Root = () => {
   return (
      <div>
         <NavBar/>
        <Outlet>
         <Home/>
         <TimeLine/>
         <Stats/>
        </Outlet>
         <Footer/>
      </div>
   );
};

export default Root;