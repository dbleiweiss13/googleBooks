import React from 'react'

function BookCard(props) {

    let isSearch = true

    if (window.location.pathname == "/saved") {
        isSearch = false
    }

    return (
        <div className="row">
            <div className="card bookCard">
                <div className="card-body">
                    <h3 id={"title" + props.i} className="card-title">{props.title}</h3>
                    <p id={"author" + props.i} className="card-text">{props.author}</p>
                    <div className="bookContent">
                        <div>
                            <img id={"image" + props.i} className="image-style img-fluid" src={props.image} />
                        </div>
                        <p id={"description" + props.i}>{props.description}</p>
                    </div>
                    {isSearch ? (
                        <div>
                            <button id={"link" + props.i} onClick={props.viewBook} data-url={props.url} className="btn btn-primary buttons">view</button>
                            <button data-index={props.i} onClick={props.saveBook} className="btn btn-primary buttons">Save</button>
                        </div>
                    ):(
                        <button onClick={props.deleteBook} data-id={props.id} className="btn btn-primary buttons">Delete</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BookCard
