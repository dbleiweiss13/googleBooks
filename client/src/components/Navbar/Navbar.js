import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar(props) {

    let isSearch = true 

    if(window.location.pathname == "/saved") {
        isSearch = false
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand">Google Books</a>
                        <Link className="linkStyle" to="/"> Search Books</Link>
                        <Link className="linkStyle" to="/saved"> Saved Books </Link>
                    </div>

                    {isSearch ? (
                        <form className="d-flex">
                            <input id="navbarSearch" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit" onClick={props.searchBook}>Search</button>
                        </form>
                    ): (<></>)}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
