import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../store/AppContext";


const Nav = () => {

    const { store, actions } = useContext(Context);

    
  return (
    <div className='container-fluid '>
            <div className='row '>
                <div className='col-md-12 d-flex justify-content-center'>
                    <ul className="nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Log in!</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/signup">Sign Up!</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Private">Private</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={actions.logout}>Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Nav