import React, {useEffect, useState} from 'react'
import API from "../../utils/API"
import "./List.css"
import BookCard from "../BookCard/BookCard"

function List(props) {

    function viewBook(e) {
        window.location.href = e.target.getAttribute("data-url")
    }

    function saveBook() {
        let newBook = {
            title: document.getElementById('title').innerHTML,
            author: document.getElementById('author').innerHTML,
            description: document.getElementById('description').innerHTML,
            image: document.getElementById('image').getAttribute("src"),
            link: document.getElementById('title').getAttribute("data-url")
        }

        API.saveBook(newBook)
        window.location.href ="/saved"

    }
    
    return (
        <div className="container">
            {props.books.items ? props.books.items.map(e => {

                let link = e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.thumbnail : "https://media.istockphoto.com/photos/blank-book-cover-isolated-on-white-picture-id478720334?k=6&m=478720334&s=612x612&w=0&h=TTN16jGbgtRC4xpW_F3eWHFdZjqQul_gKm5pcPFcabw="
                
                return(
                    <BookCard 
                        title={e.volumeInfo.title}
                        author={e.volumeInfo.authors}
                        checkLink={e.volumeInfo.imageLinks}
                        link={link}
                        description={e.volumeInfo.description}
                        url={e.volumeInfo.previewLink}
                        viewBook={viewBook}
                        saveBook={saveBook}
                    />
                )
            }) : <></>}
        </div>
    )
}

export default List
