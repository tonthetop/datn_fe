import React from 'react'

const CategorySubItem = (props) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="/dep-1" title="Dép" className="nav-link link-dark">
                Dép
            </a>
            <i className="fas fa-angle-right fa"></i>
        </div>
    )
}

export default CategorySubItem