import React from 'react'
import {Link} from 'react-router-dom'
const CategorySubItem = (props) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <Link to={`/category/${props.name}`} title="Dép" className="nav-link link-dark">
                {props.title}
            </Link>
            <i className="fas fa-angle-right fa"></i>
        </div>
    )
}

export default CategorySubItem