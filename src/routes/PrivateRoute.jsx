import React from 'react'
import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticate, setAuthenticate}) => {
  return authenticate == true ? (
    <ProductDetail 
      authenticate={authenticate} 
      setAuthenticate={setAuthenticate} 
    />
   ) : (
    <Navigate to="/Login" />
   )
}

export default PrivateRoute