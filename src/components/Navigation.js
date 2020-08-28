import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const TopNav = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const handleNavCollapse2 = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <div className="container">
            <Link className="navbar-brand" to="/">
                <i className="material-icons">
                </i>Solicitudes
            </Link>
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <div id="reloj"></div>
                    </li>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" onClick={handleNavCollapse2}>Bandeja</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default TopNav;