import React from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useEffect } from 'react';

const Verify = () => {
     //to find the URL parameter we use the useSearchParams();
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    //getting backend url from context api
    const {url} = useContext(StoreContext)
    const navigate = useNavigate(StoreContext)


    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success) {
             navigate("/myorders")
        }
        else{
            navigate("/")
        }
    } 
    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    // the logic that we can get success true and order ID
    <div className='verify'>
        <div className="spinner">
        </div>
    </div>
  )
}

export default Verify
