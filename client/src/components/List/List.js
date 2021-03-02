import React, {useEffect, useState} from 'react'
import API from "../../utils/API"
import "./List.css"

function List(props) {

    function viewBook(e) {
        console.log(e.target.getAttribute("data-url"))
    }

    function saveBook() {
        let newBook = {
            title: document.getElementById('title').innerHTML,
            author: document.getElementById('author').innerHTML,
            description: document.getElementById('description').innerHTML,
            image: document.getElementById('image').getAttribute("src"),
            link: document.getElementById('title').getAttribute("data-url")
        }

        console.log(newBook)
        API.saveBook(newBook)
    }
    
    return (
        <div className="container">
            {props.books.items ? props.books.items.map(e => {
                return(
                    <div className="row">
                        <div className="card bookCard">
                            <div className="card-body">
                                <h3 id="title" className="card-title">{e.volumeInfo.title}</h3>
                                <p id="author" className="card-text">{e.volumeInfo.authors ? e.volumeInfo.authors[0] : "No Author Listed"}</p>
                                <div className="bookContent">
                                    <div>
                                        <img id="image" className="image-style img-fluid" src={e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.thumbnail : "https://media.istockphoto.com/photos/blank-book-cover-isolated-on-white-picture-id478720334?k=6&m=478720334&s=612x612&w=0&h=TTN16jGbgtRC4xpW_F3eWHFdZjqQul_gKm5pcPFcabw="} />
                                    </div>
                                    <p id="description">{e.volumeInfo.description}</p>
                                </div>
                                <button id="link" onClick={viewBook} data-url={e.volumeInfo.previewLink} className="btn btn-primary buttons">view</button>
                                <button onClick={saveBook} className="btn btn-primary buttons">Save</button>
                            </div>
                            </div>
                    </div>
                )
            }) : <></>}
        </div>
    )
}

export default List
