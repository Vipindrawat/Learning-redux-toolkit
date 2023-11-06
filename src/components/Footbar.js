import React from 'react'
import { useSelector } from 'react-redux';

const Footbar = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <button className="btn btn-success" type="submit">{count}</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Footbar;
