import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {
    //useSelector is used to return the part of the redux state which we want to access or use:
    // it takes an function as argument and expect it to return the part of state which we want:
    const money = useSelector((state) => state.bank);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <button className="btn btn-success" type="submit">{money}</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
