import React from 'react'
import PropTypes from 'prop-types'

function Navbar({ icon, title }) {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon}>{title}</i>
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    icon: "fab fa-github",
    title: "Github Finder"
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired

};

export default Navbar
