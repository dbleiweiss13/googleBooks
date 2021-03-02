import React, { useState, useEffect } from "react";
import API from '../utils/API'
import Navbar from '../components/Navbar/Navbar'

function Saved() {

    const [books, setBook] = useState([])

    useEffect(() => {
        getBooksFromDB()
    }, [])

    function getBooksFromDB() {
        API.getBooks().then(data => {
            setBook(data.data)
        })
    }

    return (
        <div>
           <Navbar /> 
        </div>
    )
}

export default Saved
