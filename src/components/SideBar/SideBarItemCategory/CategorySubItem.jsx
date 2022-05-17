import React from 'react'
import {Link} from 'react-router-dom'
const CategorySubItem = (props) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <Link to="/dep-1" title="Dép" className="nav-link link-dark">
                Dép
            </Link>
            <i className="fas fa-angle-right fa"></i>
        </div>
    )
}

export default CategorySubItem