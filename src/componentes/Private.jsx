import React, { useContext, useEffect } from 'react'
import { Context } from "../store/AppContext";
import { useNavigate } from "react-router-dom";

const Private = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();


  useEffect(() => {
    if (store.access_token == null) navigate("/")
  }, [store.access_token])



  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-center mt-5'>
        If you are reading this, it means you loged in successfully
        </div>
      </div>
    </div>
  )
}

export default Private