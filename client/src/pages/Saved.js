import React, { useState, useEffect } from "react";
import API from '../utils/API'
import Navbar from '../components/Navbar/Navbar'
import BookCard from "../components/BookCard/BookCard"

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

    function deleteBook(event) {
        const id = event.target.getAttribute("data-id")
        API.deleteBook(id).then(data => {
            getBooksFromDB()
        })
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                {books ? (books.map(e => {
                    return (
                        <BookCard
                            title={e.title}
                            author={e.author}
                            image={e.image}
                            description={e.description}
                            url={e.link}
                            id={e._id}
                            deleteBook={deleteBook}
                        />
                    )
                })
                ): (<></>)}
            </div>
        </div>
    )
}

export default Saved
