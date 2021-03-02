import React from 'react'

function BookCard(props) {
    return (
        <div className="row">
            <div className="card bookCard">
                <div className="card-body">
                    <h3 id="title" className="card-title">{props.title}</h3>
                    <p id="author" className="card-text">{props.authors ? props.authors[0] : "No Author Listed"}</p>
                    <div className="bookContent">
                        <div>
                            <img id="image" className="image-style img-fluid" src={props.link} />
                        </div>
                        <p id="description">{props.description}</p>
                    </div>
                    <button id="link" onClick={props.viewBook} data-url={props.url} className="btn btn-primary buttons">view</button>
                    <button onClick={props.saveBook} className="btn btn-primary buttons">Save</button>
                </div>
            </div>
        </div>
    )
}

export default BookCard
