import React from 'react'
import './Navbar.css'

const Navbar = () => {



    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
            <p className="navbar-brand" id='university'>The University Campuses</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Programmes</p>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link">Examinations</p>
                    </li>
                    <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select University
        </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <p className="dropdown-item">National Universities</p>
                            <p className="dropdown-item">State Universities</p>
                            <p className="dropdown-item">Private Universities</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar
