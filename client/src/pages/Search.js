import React, { useState, useEffect } from "react";
import API from '../utils/API'
import List from '../components/List/List'
import Navbar from '../components/Navbar/Navbar'

function Search() {
    const [books, setBook] = useState([])

    useEffect(() => {
        let lastSearch = localStorage.getItem("lastSearch")
        if (lastSearch == null) {
            lastSearch = ""
        }
        searchBook(undefined,lastSearch)
    }, [])

    function searchBook(event,searchTerm) {
        let search = searchTerm
        if (event !== undefined) {
            event.preventDefault()
            search = document.getElementById("navbarSearch").value
            localStorage.setItem("lastSearch", search)
        }

        API.searchBook(search).then(data => {
            setBook(data.data)
        })
    }

    return (
        <div>
            <Navbar 
                searchBook={searchBook}
            />
            <List 
                books={books}
            />
        </div>
    )
}

export default Search
