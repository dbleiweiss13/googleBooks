import React, {useEffect, useState} from 'react'
import API from "../../utils/API"
import "./List.css"
import BookCard from "../BookCard/BookCard"

function List(props) {

    function viewBook(e) {
        window.location.href = e.target.getAttribute("data-url")
    }

    function saveBook(event) {
        let index = event.target.getAttribute("data-index")

        let newBook = {
            title: document.getElementById('title' + index).innerHTML,
            author: document.getElementById('author' + index).innerHTML,
            description: document.getElementById('description' + index).innerHTML,
            image: document.getElementById('image' + index).getAttribute("src"),
            link: document.getElementById('title' + index).getAttribute("data-url")
        }

        API.saveBook(newBook).then(() => {
            window.location.href ="/saved"
        })

    }
    
    return (
        <div className="container">
            {props.books.items ? props.books.items.map((e,i) => {

                let link = e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.thumbnail : "https://media.istockphoto.com/photos/blank-book-cover-isolated-on-white-picture-id478720334?k=6&m=478720334&s=612x612&w=0&h=TTN16jGbgtRC4xpW_F3eWHFdZjqQul_gKm5pcPFcabw="
                let author = e.volumeInfo.authors ? e.volumeInfo.authors[0] : "No Author Listed"

                return(
                    <BookCard
                        i={i} 
                        title={e.volumeInfo.title}
                        author={author}
                        image={link}
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
