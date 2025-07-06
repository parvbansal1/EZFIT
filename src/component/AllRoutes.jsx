// import React from 'react'
// import { Routes, Route} from "react-router-dom";
// import Hero from '../UI/Hero';
// import Testimonials from '../UI/Testimonials';
// import Pricing from '../UI/Pricing';
// import Track from '../UI/Track';
// import Exercise from '../UI/Exercise';
// import Home from '../UI/Home';
// import { useContext } from 'react'
// import { AuthContext } from './AuthContextProvider'
// import Swal from 'sweetalert2';
// import { useAuth0 } from "@auth0/auth0-react";
// import PrivateRoute from './PrivateRoute';
// import Login from '../UI/LogIn/Login';

// const AllRoutes = () => {
//   const {loginWithRedirect, isAuthenticated,} = useAuth0();
//   // const {filter,setFilter,verifyUser}=useContext(AuthContext);
  
//   return (
//     <Routes>
//       <Route path="/" element={<Home/>} />  
//       <Route path="/programs" element={<Testimonials />} />  
//       <Route path="/membership" element={<Pricing />} />  
//       <Route path="/track" element={
//         isAuthenticated?<Track />:<Login/>
//       } />
//     </Routes>
//   )
// }

// export default AllRoutes


import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../UI/Home';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/Pricing';
import Track from '../UI/Track';
import Login from '../UI/LogIn/Login';

import { useAuth0 } from "@auth0/auth0-react";

const AllRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Optional loading screen while checking auth
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Testimonials />} />
      <Route path="/membership" element={<Pricing />} />
      <Route
        path="/track"
        element={isAuthenticated ? <Track /> : <Navigate to="/" />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
