import React from 'react'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <input id="navbarSearch" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit" onClick={props.searchBook}>Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
