import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>

<h1>This is main  page  </h1>

<Outlet>  </Outlet>


<Footer>

    
</Footer>




            
        </div>
    );
};

export default Main;