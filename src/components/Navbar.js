import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        <a className="nav-link" href="/">Features</a>
                        <a className="nav-link" href="/">Pricing</a>
                        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </div>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="customSwitch1">Enable Dark Mode</label>
                </div>
            </div>
        </nav>

    )
};

Navbar.propTypes = {
    title: PropTypes.string
};